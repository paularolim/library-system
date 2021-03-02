const router = require('express').Router();

const adminController = require('../controllers/AdminController');

router.get('/:id', adminController.showOne);
router.post('/', adminController.create);

module.exports = router;