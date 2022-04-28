const Reader = require('./../../lib/utils.Reader')
const jsonFilePath = './../info/explorers.json'
describe('Read class testing', () => {
    test('should return a parsed js object from json file', () => {
        const parsedObject = Reader.readJsonFile(jsonFilePath)
        expect(parsedObject).not.toBeUndefined()
    });
});