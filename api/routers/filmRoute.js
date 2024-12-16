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
    if(req.query.categoryId){
        filmController.getALLFilmsInCategory(req.query.categoryId).then((result)=>{
            return res.status(200).json(resGetHelper.success(result.rows,'Фильмы успешно получены'))
        }).catch((err)=>{
            console.log(err)
            return res.status(500).json({messages:err})
        })
        
    } else if(req.query.searchText){
        filmController.getALLFilmsInSearch(req.query.searchText).then((result)=>{
            return res.status(200).json(resGetHelper.success(result.rows,'Фильмы успешно получены'))
        }).catch((err)=>{
            console.log(err)
            return res.status(500).json({messages:err})
        })
    }
    else{
        filmController.getALLFilms().then((result)=>{
            return res.status(200).json(resGetHelper.success(result.rows,'Фильмы успешно получены'))
        }).catch((err)=>{
            console.log(err)
            return res.status(500).json({messages:err})
        })
    }

    
 
})
filmRouter.delete('/',(req,res)=>{
    filmController.deleteFilm(req.query.id).then(()=>{
              return res.status(200).json(resGetHelper.success([],'Фильм успешно удален'))
    })
})
module.exports = filmRouter;