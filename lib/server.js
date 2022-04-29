const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Welcome to Fizzbuzz Api!"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorers = ExplorerController.getExplorersByMission(mission);
    res.json(explorers);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amount = ExplorerController.getAmountOfExplorersByMission(mission)
    res.json(amount)
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost:${port}`);
})