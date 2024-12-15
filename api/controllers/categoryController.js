const db = require('../db')
class categoryController{
    async getAllCategories() {
        try {
            const result = await db.query('SELECT * FROM category');
            return result.rows; 
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error; 
        }
    }
    
    async create(body){
        const { name } = body;
        const query = `
               INSERT INTO category (name) VALUES($1)
            `;
        return db.query(query, [name])
    }
   
    async edit(body){
        const { name, id } = body;
        console.log(id)
        const query = `
               UPDATE category SET name = $1 WHERE id = $2
            `;
        return db.query(query, [name,id])
    }
  
}

module.exports = new categoryController()