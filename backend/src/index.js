
const express = require("express");

require("dotenv").config()

const connect = require("./configs/db");

const userController = require("./controller/user.controller");
const flatsController = require("./controller/flats.controller");
const port = process.env.PORT || 3500

const {register,login} = require("./controller/auth.controller")


const app = express();

app.use(express.json())

app.post("/register", register)
app.post("/login", login)

app.use("/users", userController);
app.use("/flats", flatsController);





app.listen(port, async (req, res) => {
    try {
        await connect()
    } catch (e) {
        console.error(e.message)
    }
    console.log("listening on port 3500")
})

