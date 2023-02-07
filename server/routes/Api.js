const express = require('express');
const spanishController = require('../controllers/spanishController');
const router = express.Router();

router.get('/db/:id', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.finalDatabase)
);

router.get('/db', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.finalDatabase)
);


module.exports = router;