const router = require('express').Router();

const LoanController = require('../controllers/LoanController');

router.get('/', LoanController.showAll);

module.exports = router;