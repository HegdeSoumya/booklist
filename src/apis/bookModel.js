const mongoose = require('mongoose');

const book_schema = new mongoose.Schema({
    book_isbn: {
        type: String,
        required: true,
        unique: true
    },
    book_name: {
        type: String,
        required: true
    },
    book_author: {
        type: [String],
        required: true
    },
    book_summary: {
        type: String
    },
    is_read: {
        type: Boolean,
        default: true
    },
    is_favorite: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('book_details', book_schema);