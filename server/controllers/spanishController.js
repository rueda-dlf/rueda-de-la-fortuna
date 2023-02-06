//const db = require('../model/Models');
//const db = require('./database/db.json')

const path = require('path');
const fs = require('fs');
const spanishController = {};


//declare the finalDatabase in the global scope
let finalDatabase;

fs.readFile(path.join(__dirname,'../database/test.json'), 'utf-8', (err, data, next) => {
   
   try {
   const db = JSON.parse (data);

      const transformData = (db) => {
         return Object.entries(db).map(([spanishWord, englishWordObj]) => {
         return {spanishWord, englishWord: englishWordObj.translations[0]};
         });
      };
   finalDatabase = transformData(db);
   console.log(finalDatabase)
   return next(finalDatabase) 
   } catch (err) {
      console.log('Error Parsing JSON string!', err)
   }
})

// { words: [{casa: {translation: [house]}}, {comida: {translation: [food]}}]}
// word[i]translation[0]

console.log(finalDatabase)

spanishController.getSpanishWords = async (req, res, next) => {
//   try {
//     const finalDatabase = await readData();
//     req.finalDatabase = finalDatabase;
//     next();
//   } catch (err) {
//     console.log('Error getting Spanish words:', err);
//     res.status(500).send('Error getting Spanish words');
//   }
};


module.exports = spanishController;


