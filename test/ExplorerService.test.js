
const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json")

describe("Unit test for Explorer Service class", () => {
    test('1) FilterByMission function', () => {
        const explorer = ExplorerService.FilterByMission(explorers, "node")
        //For each explorer expect mission===node
        expect(explorer.mission[0]).toBe("node")
    })

})