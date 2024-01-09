const express = require('express')
const app = express()

const { connectDB } = require("./config/dbConnection")
const { port } =  require("./config");

connectDB();

app.use(express.json());


app.get('/', function (req, res) {
   res.send('Hello World')
})

app.listen(port,() => {
   console.log(`serverrunning on port ${port}`);
})