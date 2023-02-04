const express = require('express');
const spanishController = require('../controllers/spanishController');
const router = express.Router();


router.get('/', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.words)
);


module.export = router;