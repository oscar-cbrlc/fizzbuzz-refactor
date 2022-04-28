class ExplorerService {
    static filterByMission(explorers, mission) {
        const filtered = explorers.filter(e => e.mission == "node")
        return filtered.map(e => e.githubUsrname)
    }
}

module.exports = ExplorerService