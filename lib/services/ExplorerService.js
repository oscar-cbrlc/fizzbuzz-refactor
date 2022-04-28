class ExplorerService {
    static filterByMission(explorers, mission) {
        const filtered = explorers.filter(e => e.mission == mission)
        return filtered.map(e => e.githubUsername)
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        return this.filterByMission(explorers, mission).length
    }
}

module.exports = ExplorerService