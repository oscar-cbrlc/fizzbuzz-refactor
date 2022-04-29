const fs = require("fs");
const path = require("path");
class Reader {
    static readJsonFile(filePath) {
        const rawdata = fs.readFileSync(path.resolve(__dirname, filePath));
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;