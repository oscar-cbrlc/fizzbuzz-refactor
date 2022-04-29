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
}

module.exports = ExplorerController;