const BookService = require('./bookService');
const Locals = require('../providers/locals');
const { ERROR_MESSAGES } = require('../commons/serverMessages');

class BookController {

    constructor() {
    }

    async getBookDetails(req, res) {
        try {
            const { isbn } = req.body;
            const bookDetails = await BookService.getBookDetails(isbn);
            return res.status(200).send(bookDetails);
        } catch (err) {
            return res.status(err.statusCode).send(err.message);
        }
    }

    async addBookByIsbn(req, res) {
        try {
            let payload = req.body;
            const bookDetails = await BookService.getBookDetails(payload);
            console.log('book details controller:::', bookDetails);
            // if (bookDetails.totalItems === 0) {
            //     console.log('error in controller::')
            //     throw new HTTPStatusError(404, ERROR_MESSAGES.BOOK_NOT_FOUND);
            // }
            const response = await BookService.addBookByIsbn(bookDetails, payload);
            return res.status(res.statusCode).send(response);
        } catch (err) {
            return res.status(err.statusCode).send(err.message);
        }
    }

    async findBookByIsbn(req, res) {
        try {
            const { isbn } = req.params;
            const response = await BookService.findBookByIsbn(isbn);
            return res.status(200).send(response);
        } catch (err) {
            return res.status(err.statusCode).send(err.message);
        }
    }

}

module.exports = new BookController();