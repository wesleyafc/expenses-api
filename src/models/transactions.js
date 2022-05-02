const mongoose = require('mongoose')

const TransactionsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
    }


}, { timestamps: true })


module.exports = mongoose.model('Transactions', TransactionsSchema)