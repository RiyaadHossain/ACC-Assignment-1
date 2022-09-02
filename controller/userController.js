const fs = require('fs');
let data = fs.readFileSync("data.json")
let parsedData = JSON.parse(data)

// 1. Get Random User________________________
module.exports.randomUser = (req, res) => {

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    if (data) {
        const randomNum = random(1, parsedData.length)
        const randomUser = parsedData.find(user => user.Id == randomNum)
        res.status(200).json({ data: randomUser })
    } else {
        res.status(500).json({ error: "Internal Server Error!" })

    }

}

// 2. Get All Users________________________
module.exports.allUser = (req, res) => {

    const { limit } = req.query

    if (data) {
        const selectedData = parsedData.splice(0, limit ? limit : Infinity) // * There is a bug using splice, fix it --- splice will removed the item from the array
        res.status(200).json({ data: selectedData })
    } else {
        res.status(500).json({ error: "Internal Server Error" })
    }

}

// 3. Save a User________________________
module.exports.saveUser = (req, res) => {

    const { Id, gender, name, contact, address, photoUrl } = req.body
    if (Id && gender && name && contact && address && photoUrl) {

        const idExist = parsedData.find(user => user.Id == Number(Id))
        if (idExist) {
            res.status(403).json({ error: "Id is already Exist" })
        } else if (typeof Number(Id) === "number" && Number(Id) > 0) {
            parsedData.push({ Id, gender, name, contact, address, photoUrl })
            res.status(201).json({ message: "Your data has been saved successfully." })
        } else {
            res.status(403).json({ error: "The Id you privided isn't correct!" })
        }

    } else {
        res.status(403).json({ error: "You must provide Id, gender, name, contact, address, photoUrl properties" })
    }

}

// 4. Update a User________________________
module.exports.updateUser = (req, res) => {

}

// 5. Update Random Users________________________
module.exports.updateRandomUsers = (req, res) => {

}

// 6. Delete a User________________________
module.exports.deleteUser = (req, res) => {

}
