const { Router } = require('express');
const router = Router();

const UsersController = require('../controllers/UsersController');

router.get('/', UsersController.showAll);
router.get('/:id', UsersController.showOne);
router.post('/', UsersController.create);
router.delete('/:id', UsersController.delete);
router.put('/:id', UsersController.update);

router.get('/:id/loans', UsersController.showAllLoans);
router.get('/:id/loans/:idLoan', UsersController.showOneLoan)
router.put('/:id/loans/:idLoan', UsersController.updateLoan)

module.exports = router;
