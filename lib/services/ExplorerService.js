class ExplorerService {
    static filterByMission(explorers, mission) {
        const filtered = explorers.filter(e => e.mission == mission);
        return filtered;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        return this.filterByMission(explorers, mission).length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        return this.filterByMission(explorers, mission).map(e => e.githubUsername);
    }
    static getExplorersNamesByMission(explorers, mission) {
        return this.filterByMission(explorers, mission).map(e => e.name);
    }
}

module.exports = ExplorerService;