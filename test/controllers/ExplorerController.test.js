const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");
const explorers = Reader.readJsonFile("./../explorers.json");

describe("Tests for Explorer Controller", () => {
    test("[getExplorersByMission] should get the correct list, given any value", () => {
        // this is already tested in the service, so we get the values, 
        // and check in the controller method if they're the same
        const explorersFromService = ExplorerService.filterByMission(explorers, "node");
        const explorersFromController = ExplorerController.getExplorersByMission("node");
        expect(explorersFromController).toEqual(explorersFromService);
    });

    test("[getExplorersUsernamesByMission] should get the correct list, given any value", () => {
        const usernamesFromService = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        const usernamesFromController = ExplorerController.getExplorersUsernamesByMission("java");
        expect(usernamesFromController).toEqual(usernamesFromService);
    });
    
    test("[getExplorersAmonutByMission] should get the correct number, given any value", () => {
        const numberFromService = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const numberFromController = ExplorerController.getAmountOfExplorersByMission("node");
        expect(numberFromService).toEqual(numberFromController);
    });
});
