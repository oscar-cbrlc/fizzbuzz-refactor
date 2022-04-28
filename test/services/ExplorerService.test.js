const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')

// tested in Reader.test.js
const explorers = Reader.readJsonFile('./../../test/info/explorers.json')

describe('Explorer Service filterByMission tests', () => {
    test('should return a not-undefined list of explorers filtered by a mission', () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode).not.toBeUndefined()
    });

    test('should return a not-empty list of explorers given an existing mission (in any of them)', () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBeGreaterThan(0)
    });
});
