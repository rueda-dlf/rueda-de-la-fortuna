//declare variables to get access to the module
const path = require('path');
const fs = require('fs').promises;
const spanishController = {};
//have the finaldatabase in the global scope so that we can access it outside of the function
let finalDatabase;
//fetch the data in the local file
async function fetchAndTransformData() {
   try {
      //parse the data 
      const data = await fs.readFile(path.join(__dirname, '../database/test.json'), 'utf-8');
      const db = JSON.parse(data);
      //declare transform data so that we can return that data into a new and usable form of data structure 
      const transformData = (db) => {
         return Object.entries(db).map(([spanishWord, englishWordObj]) => {
            return {spanishWord, englishWord: englishWordObj.translations[0]};
         });
      };
      //reassing the new and final database 
      finalDatabase = transformData(db);
      console.log(finalDatabase)
      await fs.writeFile(path.join(__dirname, '../database/transformed-data.json'), JSON.stringify(finalDatabase), 'utf-8');
     //catch any errors
   } catch (err) {
      console.log('Error Parsing JSON string!', err);
   }
}



//testing to see if the function is working 
fetchAndTransformData();
// console.log(typeof fetchAndTransformData)
// //declare middleware function to try and gain access to the database and storing it into the reslocals.. 
// spanishController.getSpanishWords = async (req, res, next) => {
//    await fetchAndTransformData();
//    res.locals.finalDatabase = finalDatabase;
//    console.log(finalDatabase);
//    next();
// };


module.exports = spanishController;


