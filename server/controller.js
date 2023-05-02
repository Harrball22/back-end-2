let houses = require("./db.json")
let globalId = 4



module.exports = {
    getAllHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body

        let newHouse = {
            address,
            price: +price,
            imageURL,
            id: globalId
        }

        globalId++
        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body

        let index = houses.findIndex(house => +house.id === +id)

        if (type === "plus"){
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === "minus"){
            houses[index].price -= 10000
            if (houses[index].price < 0){
                houses[index].price = 0
            }
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

    },
    deleteHouse: (req, res) => {
        let {id} = req.params

        let index = houses.findIndex(house => +house.id === +id)

        houses.splice(index, 1)
        
        res.status(200).send(houses)
    }
}