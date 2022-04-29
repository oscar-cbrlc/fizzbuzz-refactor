class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        const score = explorer.score
        explorer.trick = ''
        if (score % 3 == 0) explorer.trick += "FIZZ"
        if (score % 5 == 0) explorer.trick += "BUZZ"
        else if (score % 3 != 0 && score % 5 != 0) explorer.trick = score
        return explorer
    }
}

module.exports = FizzbuzzService