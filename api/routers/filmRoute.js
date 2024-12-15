const { Router } = require("express");
const filmController = require('../controllers/filmConroller')
const resGetHelper = require('../responses/get')
filmRouter = new Router();
filmRouter.post('/', (req,res)=>{
    console.log(req.body)
    filmController.createNewFilm(req.body)
    return res.status(200).json(resGetHelper.success([],'Фильмы успешно получены'))
})
filmRouter.get('/', (req,res)=>{
    filmController.getALLFilms().then((result)=>{
        return res.status(200).json(resGetHelper.success(result.rows,'Фильмы успешно получены'))
    }).catch((err)=>{
        console.log(err)
        return res.status(500).json({messages:err})
    })
})
module.exports = filmRouter;