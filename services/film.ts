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

    getAllFilms(){
        return axios.get(`${env.API_URL}/films`)
    }
}

export default new FilmService()