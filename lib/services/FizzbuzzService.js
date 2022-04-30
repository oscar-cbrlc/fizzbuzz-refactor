class FizzbuzzService {
    static applyValidationInNumber(number) {
        if (number % 15 == 0) return "FIZZBUZZ";
        if (number % 3 == 0) return "FIZZ"; 
        if (number % 5 == 0) return "BUZZ";
        return number;
    }
    static applyValidationInExplorer(explorer) {
        explorer.trick = this.applyValidationInNumber(explorer.score);
        return explorer;
    }
}

module.exports = FizzbuzzService;