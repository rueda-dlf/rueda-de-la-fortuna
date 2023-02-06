const express = require('express');
const spanishController = require('../controllers/spanishController');
const router = express.Router();


router.get('/db', spanishController.getSpanishWords, (req, res) =>

  res.status(200).json(res.locals.transformedData)
);

console.log('this is the typeof', typeof spanishController)

module.export = router;