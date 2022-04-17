const express = require("express");

const connect = require("./configs/db");

const userController = require("./controller/user.controller");


const {register,login} = require("./controller/auth.controller")


const app = express();

app.use(express.json())

app.post("/register", register)
app.post("/login", login)

app.use("/users", userController);



app.listen(3500, async (req, res) => {
    try {
        await connect()
    } catch (e) {
        console.error(e.message)
    }
    console.log("listening on port 3500")
})

