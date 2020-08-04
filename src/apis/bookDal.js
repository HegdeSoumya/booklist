const bookDetails = require('../apis/bookModel');
const HTTPStatusError = require('../commons/httpStatusError');

class BookDal {
    async addBookByIsbn(payload) {
        console.log('::here:::', payload);
        return await bookDetails.create(payload).catch((error) => {
            throw new HTTPStatusError(500, error);
        });
    }

    async findBookByIsbn(isbn) {
        const response = await bookDetails.find({
            book_isbn: isbn
        })
        //     .catch((error) => {
        //         console.log('error in DAL:::', error);
        //         throw new HTTPStatusError(500, error);
        //     });
        console.log('response in DAL:::', response);
        return response;
    }
}

module.exports = new BookDal();