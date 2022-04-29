const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome to Fizzbuzz Api!"});
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost:${port}`)
})