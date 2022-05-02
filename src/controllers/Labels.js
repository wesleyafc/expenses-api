const Transactions = require('../models/transactions');
const Categories = require('../models/categories');



module.exports.createLabels = async function (req, res) {


}

module.exports.getLabels = async function (req, res) {

    Transactions.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'type',
                foreignField: 'type',
                as: 'categories_info'

            }
        },
        {
            $unwind: '$categories_info'
        }
    ])
        .then(result => {
            let data = result.map(value => Object.assign({},
                {
                    _id: value._id,
                    name: value.name,
                    type: value.type,
                    amount: value.amount,
                    createdAt: value.createdAt,
                    color: value.categories_info['color'],

                }))
            res.json(data)
        })
        .catch(err => {
            res.status(400).json({ message: `error ${err}` })
        })


}

module.exports.deleteTransaction = async function (req, res) {


}