const Transactions = require('../models/transactions');


module.exports.createTransactions = async function (req, res) {

    if (!req.body) {
        return res.status(400).send({
            message: "Transaction content can not be empty"
        });
    }

    let { name, type, amount } = req.body

    const newTransaction = await new Transactions({
        name,
        type,
        amount,
    })

    await newTransaction.save()
        .then(() =>
            res.status(200).json(newTransaction)
        )
        .catch(err => {
            res.status(400).json({ message: `error ${err}` })
        })

}

module.exports.getTransactions = async function (req, res) {
    const data = await Transactions.find()
        .then(() => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: `error ${err}` })
        })

}

module.exports.deleteTransaction = async function (req, res) {


    await Transactions.findByIdAndDelete(req.body)
        .then(() => {
            res.status(200).json({ message: 'Transaction deleted' })
        })
        .catch(err => {
            res.status(400).json({ message: `error ${err}` })
        })
}