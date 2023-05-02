const express = require("express")
const cors = require("cors")

const app = express()

const {getAllHouses, createHouse, updateHouse, deleteHouse} = require("./controller.js")

app.use(cors())
app.use(express.json())

app.get("/api/houses", getAllHouses)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)
app.delete("/api/houses/:id", deleteHouse)

app.listen(4004, () => {console.log("Running on port 4004")})