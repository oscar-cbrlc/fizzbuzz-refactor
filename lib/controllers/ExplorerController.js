const ExplorerService = require("./../services/ExplorerService");
const Reader = require("./../utils/Reader");
const FizzbuzzService = require("./../services/FizzbuzzService");

const explorersFilePath = "./../explorers.json";

class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const explorersFromMission = ExplorerService.filterByMission(explorers, mission);
        return explorersFromMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const usernamesFromMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return usernamesFromMission;
    }
    static getAmountOfExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(explorersFilePath);
        const numberOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numberOfExplorers;
    }
    static getFizzbuzzResult(number) {
        const numberAsInt = parseInt(number)
        const result = FizzbuzzService.applyValidationInNumber(numberAsInt);
        return result;
    }
}

module.exports = ExplorerController;