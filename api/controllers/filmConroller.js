const db = require('../db')
class filmController{
    
    async createNewFilm(body) {
        const { name, description, data_create, country, preview, link, category_id } = body;
        console.log(body)
        const query = `
                WITH film AS (
                    INSERT INTO films (name, description, date_create, country, prewiev, video, user_create_id)
                    VALUES ($1, $2, $3, $4, $5, $6, $7)
                    RETURNING id
                )
                INSERT INTO "filmCategory" (film_id, category_id)
                SELECT id, $8
                FROM film;
            `;
        const values = [name, description, data_create, country, preview, link, 1,category_id];
        db.query(query, values)
        .then(res => {
            // Обработка успешного результата
        })
        .catch(err => {
            console.error("Error fetching categories:", err);
        });
    }
    
    async getALLFilms() {
                let query = `
                    SELECT films.*, JSON_AGG(jsonb_build_object('id', category.id, 'name', category.name)) AS categories
                    FROM films
                    JOIN "filmCategory" ON films.id = "filmCategory".film_id
                    JOIN category ON "filmCategory".category_id = category.id
                    GROUP BY films.id;
                  `     
                  
               return  db.query(query)
        }
    
    async getALLFilmsInCategory(categoryId){
        let query = `
            SELECT 
            films.*, 
                JSON_AGG(jsonb_build_object('id', category.id, 'name', category.name)) AS categories
            FROM 
                films
            JOIN 
                "filmCategory" ON films.id = "filmCategory".film_id
            JOIN 
                category ON "filmCategory".category_id = category.id 
            WHERE
                "filmCategory".category_id = $1
            GROUP BY 
                films.id;
        `
        return  db.query(query, [categoryId])
    }

    getALLFilmsInSearch(searchText){
        let query = `SELECT 
                        films.*, 
                        JSON_AGG(jsonb_build_object('id', category.id, 'name', category.name)) AS categories
                    FROM 
                        films
                    JOIN 
                        "filmCategory" ON films.id = "filmCategory".film_id
                    JOIN 
                        category ON "filmCategory".category_id = category.id
                    WHERE 
                        films.name ILIKE '%'||$1||'%'  
                    GROUP BY 
                        films.id;
    `
         return  db.query(query, [searchText])
    }

    editFilm(body){
        
    }

    deleteFilm(id){
        return new Promise((resolve, reject) => {
            let queryFirst = 
                `DELETE FROM "filmCategory" WHERE "film_id" = $1;` 
            ;
            let querySecond = 
                `DELETE FROM "films" WHERE "id" = $1;`
            ;
    
            db.query(queryFirst, [id])
                .then((result) => {
                    return db.query(querySecond, [id]);
                })
                .then((result) => {
                    resolve(result); 
                })
                .catch((err) => {
                    reject(err); 
                });
        });
      
    }
}

module.exports = new filmController()