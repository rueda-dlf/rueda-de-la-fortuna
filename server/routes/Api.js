const express = require('express');
const spanishController = require('../controllers/spanishController');
const router = express.Router();

router.get('/db/:id', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.finalDatabase)
);

<<<<<<< HEAD
router.get('/db', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.finalDatabase)
=======
router.get('/', spanishController.getSpanishWords, (req, res) =>
  res.status(200).json(res.locals.words)
>>>>>>> 2cd9729dd4064872e12ea2c55aa9f5e1e663ad4f
);


module.exports = router;