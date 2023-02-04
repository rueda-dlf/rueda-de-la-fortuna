//const db = require('../model/Models');
const db = require('./database/db.json')
const spanishController = {};

spanishController.getSpanishWords = async(req, res, next) => {
   const { words } = req.body;
   try{
    const result = await db.query(words)
    console.log(result)
    res.locals.words = result.words;
    return next()
   }catch(e){
    return next(e)
   }
   
}

module.exports = spanishController;