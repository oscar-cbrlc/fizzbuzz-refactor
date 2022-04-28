class ExplorerService {
    static filterByMission(explorers, mission) {
        const filtered = explorers.filter(e => e.mission == mission)
        return filtered.map(e => e.githubUsername)
    }
}

module.exports = ExplorerService