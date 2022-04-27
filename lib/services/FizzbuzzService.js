class FizzbuzzService {

    static applyValidationInExplorer(explorer) {
        const assignFizzTrick = function (explorer) {
            if (explorer.score % 3 === 0) {
                explorer.trick = "FIZZ";
                return explorer;
            } else {
                explorer.trick = explorer.score;
                return explorer;
            }
        };

        return explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));

        const assignBuzzTrick = function (explorer) {
            if (explorer.score % 5 === 0) {
                explorer.trick = "BUZZ";
                return explorer;
            } else {
                explorer.trick = explorer.score;
                return explorer;
            }
        };

        return explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));
        const assignFizzBuzzTrick = function (explorer) {
            if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
                explorer.trick = "FIZZBUZZ";
                return explorer;
            } else {
                explorer.trick = explorer.score;
                return explorer;
            }
        };

        return explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
    }


}

module.exports = FizzbuzzService