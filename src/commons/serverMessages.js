const ERROR_MESSAGES = {
    INTERNAL_SERVICE_ERROR: 'Internal service error',
    BOOK_NOT_FOUND: 'Book not found',
    BOOK_ALREADY_EXISTS: 'Book already exists',
    BOOK_UPDATE_FAILED: 'Failed to update book details',
    INVALID_ISBN: 'Isbn number not valid',
    BOOK_NOT_FOUND: 'Could not find book with the given isbn'
};

const SUCCESS_MESSAGES = {
    SUCCESSFULLY_ADDED: 'Book successfully added to the shelf',
    FAVORITE_ADDED: 'Book successfully added to favorites',
    SUCCESSFULLY_UPDATED: 'Book details updated successfully'
};

module.exports = {
    ERROR_MESSAGES,
    SUCCESS_MESSAGES
};