const fs = require('fs');

// 1. Get Random User________________________
module.exports.randomUser = (req, res) => {

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const data = fs.readFileSync("data.json")

    if (data) {
        const parsedData = JSON.parse(data)
        const randomNum = random(1, parsedData.length)
        const randomUser = parsedData.find(user => user.Id == randomNum)
        res.status(200).json({ data: randomUser })
    } else {
        res.status(500).json("Internal Server Error!")

    }

}

// 2. Get All Users________________________
module.exports.allUser = (req, res) => {

}

// 3. Save a User________________________
module.exports.saveUser = (req, res) => {

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
