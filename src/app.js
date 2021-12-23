const express = require("express");
const { TodoRouter } = require("./router/todo.routes");
require("./db")
const app = express();

const PORT = process.env.PORT || 9091;

app.use(express.json());

app.use("/todos", TodoRouter)

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})


app.listen(PORT, () => {console.log("Server started at PORT : ", PORT)})