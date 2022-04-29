const ExplorerController = require("./../../lib/controllers/ExplorerController");
const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/reader")
const explorers = Reader.readJsonFile("./../explorers.json")

describe("Tests for Explorer Controller", () => {
    test("should get the correct list, given any value", () => {
        // this is already tested in the service, so we get the values, 
        // and check in the controller method if they're the same
        const explorersFromService = ExplorerService.filterByMission(explorers, "node")
        const explorersFromController = ExplorerController.getExplorersByMission("node")
        expect(explorersFromController).toEqual(explorersFromService)
    });
});
