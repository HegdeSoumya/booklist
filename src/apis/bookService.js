const BookDal = require('./bookDal');
const Request = require('request');
const HTTPStatusError = require('../commons/httpStatusError');
const { ERROR_MESSAGES } = require('../commons/serverMessages');

class BookService {

    async addBookByIsbn(bookDetails, payload) {
        try {
            console.log('add book coming here:::', bookDetails);
            const bookExists = await this.findBookByIsbn(payload.isbn);
            console.log('does the book exist', bookExists);
            const bookPayload = {
                book_isbn: payload.isbn,
                book_name: bookDetails.items[0].volumeInfo.title,
                book_author: bookDetails.items[0].volumeInfo.authors,
                book_summary: bookDetails.items[0].volumeInfo.description,
                is_read: payload.is_read,
                is_favorite: payload.is_favorite
            }

            const result = await BookDal.addBookByIsbn(bookPayload);
            console.log('result from dal::::', result);
            return result;
            // return;

        } catch (err) {
            console.log('error in service:::', err)
            throw new HTTPStatusError(err.statusCode, err.message);
        }
        // if (!result) {
        //     throw new HTTPStatusError(400, `Database error`);
        // }
        // return result;
    }

    async getBookDetails(isbn) {
        return new Promise((resolve, reject) =>
            Request.get({
                url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
                json: true
            },
                (error, response, body) => {
                    if (error) {
                        console.log('error promise', error)
                        return reject(error);
                    }
                    if (response.statusCode !== 200) {
                        const message = body && body.message ? body.message : '';
                        return reject(new HTTPStatusError(response.statusCode, message))
                    }
                    console.log('responseeeeee:::::', response.body);
                    if (response.body.totalItems === 0) {
                        console.log('here too')
                        return reject(new HTTPStatusError(404, ERROR_MESSAGES.BOOK_NOT_FOUND))
                    } else {
                        console.log('here')
                        return resolve(response.body)
                    }
                })

        )
    }

    async findBookByIsbn(isbn) {
        try {
            const bookDetails = await BookDal.findBookByIsbn(isbn);
            if (Object.keys(bookDetails).length === 0) {
                throw new HTTPStatusError(404, ERROR_MESSAGES.BOOK_NOT_FOUND);
            }
            return bookDetails;
        } catch (error) {
            // console.log('error in service:::', error);
            console.log('coming here too 404')
            throw new HTTPStatusError(error.statusCode, error.message);

        }
    }
}


module.exports = new BookService();