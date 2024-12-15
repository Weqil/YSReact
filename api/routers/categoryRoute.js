const { Router } = require("express");
const resGetHelper = require('../responses/get')
const categoryController = require('../controllers/categoryController')
categoryRouter = new Router();

categoryRouter.get('/', (req,res)=>{
    let content = []
        categoryController.getAllCategories().then((data)=>{
        content = data
        console.log(content)
        return res.status(200).json(resGetHelper.success(content,'Категории успешно получены'))
    })
    
  
})

categoryRouter.post('/', (req,res)=>{
    categoryController.create(req.body).then(()=>{
    }).catch((err)=>{
        console.log(err)
    })
    return res.status(200).json(resGetHelper.success([],'Категория успешно создана'))
})

categoryRouter.post('/edit', (req,res)=>{
    categoryController.edit(req.body).then((data)=>{console.log(data)}).catch((err)=>{
        console.log(err)
    })
    return res.status(200).json(resGetHelper.success([],'Категория успешно изменена'))
})

module.exports = categoryRouter;