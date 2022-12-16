const {MongoClient} = require("mongodb")
const connectionString = process.env.ATLAS_URL
const client = new MongoClient(connectionString)


module.exports = { database : client.db("quizGame")}

