const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

// tested in Reader.test.js
const explorers = Reader.readJsonFile("./../../test/info/explorers.json");

// ... //

describe("Explorer Service filterByMission tests", () => {
    test("should return a not-undefined list of explorers filtered by a mission", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "ad");
        expect(explorersInNode).not.toBeUndefined();
    });

    test("should return a not-empty list of explorers given an existing mission (in any of them)", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBeGreaterThan(0);
    });
});

describe("Explorer Service getAmountOfExplorersByMission tests", () => {
    test("should get 0, given an invalid value", () => {
        // also works for non-existing values
        const numberOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, 321);
        expect(numberOfExplorers).toEqual(0);
    });
    test("should get more than 0, given an existing value", () => {
        const numberOfExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(numberOfExplorers).toBeGreaterThan(0);
    });
});

describe("ExplorerService getExplorersUsernamesByMission tests", () => {
    test("should get an empty array if given wrong value", () => {
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "C#");
        expect(usernames.length).toEqual(0);
    });
    test("should get a username list if given existing value", () => {
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "css");
        expect(usernames).toEqual(["ajolonauta16", "ajolonauta17"]);
    });
});