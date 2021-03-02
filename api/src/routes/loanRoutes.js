const router = require('express').Router();

const LoanController = require('../controllers/LoanController');

router.get('/', LoanController.showAll);
router.post('/', LoanController.create)

module.exports = router;