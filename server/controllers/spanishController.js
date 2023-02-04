//const db = require('../model/Models');
//const db = require('./database/db.json')

const path = require('path');
const fs = require('fs');

fs.readFile(path.join(__dirname,'../database/test.json'), 'utf-8', (err, data) => {
   if(err){
      console.error(err);
      return;
   }
   try {
   const db = JSON.parse (data);
console.log(db)
      const transformData = (db) => {
         return Object.entries(db).map(([spanishWord, englishWordObj]) => {
         return {spanishWord, englishWord: englishWordObj.translations[0]};
         });
      };
   const finalDatabase = transformData(db)
   console.log(finalDatabase)
   return finalDatabase
   
   } catch (err) {
      console.log('Error Parsing JSON string!', err)
   }
})



// { words: [{casa: {translation: [house]}}, {comida: {translation: [food]}}]}
// word[i]translation[0]


const spanishController = {};

spanishController.getSpanishWords = async(req, res, next) => {
   const { words } = req.body;
console.log('what is this', words)

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


