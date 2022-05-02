const Categories = require('../models/categories');


module.exports.createCategories = async function (req, res) {
    const CreateCategories = new Categories({
        type: "Investment",
        color: "#eee020",
    })

    await CreateCategories.save()
        .then(() => {
            res.status(200).json(CreateCategories)
        })
        .catch(err => {
            res.status(400).json({ message: `error ${err}` })
        })
}

module.exports.getCategories = async function (req, res) {
    let data = await Categories.find()

    const filter = data.map(value => Object.assign({},
        {
            type: value.type,
            color: value.color,
        }
    ))
    return res.json(filter)
}