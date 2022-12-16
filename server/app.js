const express = require("express")
const app = express()
const {database} = require("./db/connections")

app.get("/questions", async (req, res) => {
    const questions = database.collection("questions")
    const quiz1 = await questions.find({})
    console.log("fetching")
    console.log(quiz1)
})
app.post("/")
const port = 3001
app.listen(port, () => {
    console.log("litsening on ", port)
})