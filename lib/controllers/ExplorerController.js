const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

const explorersFilePath = "./../explorers.json"

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const explorersFromMission = ExplorerService.filterByMission(explorers, mission);
        return explorersFromMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const usernamesFromMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesFromMission
    }
    static getAmountOfExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const numberOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numberOfExplorers;
    }
}

module.exports = ExplorerController;