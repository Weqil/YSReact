class Res {
    success(data, message = 'Данные успешно получены'){
        return {
            status: 'success',  
            message: message,  
            content: data
        }
    }
}
module.exports = new Res()