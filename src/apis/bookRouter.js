const express = require('express');
const router = express.Router();

const BookController = require('./bookController');

router.post('/bookShelf/addBook', BookController.addBookByIsbn);

router.get('/googleBooks/getBook', BookController.getBookDetails);

router.get('/bookShelf/findBook/:isbn', BookController.findBookByIsbn);
module.exports = router;