import axios from "axios";
import env from '../env';  // Путь к файлу Env.ts
class FilmService{
    create(form:any){ 
        return axios.post(`${env.API_URL}/films`,form,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
    }

    getAllFilms(query?:any){
        return axios.get(`${env.API_URL}/films`,{
            params:{...query}
        })
    }

    delete(id: any){
        return axios.delete(`${env.API_URL}/films`,{
            params:{
                id: id,
            }
        })
    }
}

export default new FilmService()