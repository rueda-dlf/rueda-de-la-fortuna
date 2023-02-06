//declare variables to get access to the module
const path = require('path');
const fs = require('fs').promises;
const spanishController = {};
//have the finaldatabase in the global scope so that we can access it outside of the function
let finalDatabase;
//fetch the data in the local file
async function fetchAndTransformData(index) {
<<<<<<< HEAD
   try {
      //parse the data 
      const data = await fs.readFile(path.join(__dirname, '../database/db.json'), 'utf-8');
      const db = JSON.parse(data);
      //declare transform data so that we can return that data into a new and usable form of data structure 
      const transformData = (db) => {
         return Object.entries(db).map(([spanishWord, englishWord]) => {
            return {spanishWord, englishWord: englishWord.translations[0]};
         });
      };
      finalDatabase = transformData(db);
      
      //console.log(finalDatabase)
      return finalDatabase[index];
     //catch any errors
   } catch (err) {
      console.log('Error Parsing JSON string!', err);
   }
}

//testing to see if the function is working 
=======
  try {
    //parse the data
    const data = await fs.readFile(
      path.join(__dirname, '../database/db.json'),
      'utf-8'
    );
    const db = JSON.parse(data);
    //declare transform data so that we can return that data into a new and usable form of data structure
    const transformData = (db) => {
      return Object.entries(db).map(([spanishWord, englishWord]) => {
        return { spanishWord, englishWord: englishWord.translations[0] };
      });
    };
    //reassing the new and final database

    finalDatabase = transformData(db);
    //console.log(finalDatabase)

    return finalDatabase[index];
    //catch any errors
  } catch (err) {
    console.log('Error Parsing JSON string!', err);
  }
}

//testing to see if the function is working
>>>>>>> 8a8f12d816bee43958b303c25427633c569a58b8
fetchAndTransformData();

//declare middleware function to try and gain access to the database and storing it into the reslocals..
spanishController.getSpanishWords = async (req, res, next) => {
  console.log(req.params);
  res.locals.finalDatabase = await fetchAndTransformData(req.params.id);
  next();
};

module.exports = spanishController;
