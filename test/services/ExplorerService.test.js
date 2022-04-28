const Reader = require('./../../lib/utils/Reader')
const ExplorerService = require('./../../lib/services/ExplorerService')

// tested in Reader.test.js
const explorers = Reader.readJsonFile('./../../test/info/explorers.json')

describe('Explorer Service method tests', () => {
    test('should return a not-undefined list of explorers filtered by a mission', () => {
        explorersInNode = ExplorerService.filterByMission(explorers, "h")
        expect(explorersInNode).not.toBeUndefined()
    });
});