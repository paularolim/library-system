const { Router } = require('express');
const router = Router();

const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.showAll);
router.get('/:id', BooksController.showOne);
router.post('/', BooksController.create);
router.delete('/:id', BooksController.delete);
router.put('/:id', BooksController.update);

module.exports = router;
