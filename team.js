var Player = require('./player');

var Team = function(name, offense, defense) {
    this.name = name;
    this.offense = offense;
    this.defense = defense;
    return this;
}
Team.prototype.getPlayers = function() {
    return this.players;
}

Team.offensiveRoster = [
    new Player({'position': 'FB', speed: 50, power: 50}),
    new Player({'position': 'LTE', speed: 50, power: 50}),
    new Player({'position': 'LT', speed: 25, power: 75}),
    new Player({'position': 'LG', speed: 15, power: 80}),
    new Player({'position': 'C', speed: 20, power: 80}),
    new Player({'position': 'RG', speed: 15, power: 85}),
    new Player({'position': 'RT', speed: 20, power: 80}),
    new Player({'position': 'RTE', speed: 60, power: 60})
]

Team.defensiveRoster = [
    new Player({'position': 'WDE', speed: 50, power: 70}),
    new Player({'position': 'WDT', speed: 25, power: 85}),
    new Player({'position': 'SDT', speed: 15, power: 95}),
    new Player({'position': 'SDE', speed: 20, power: 75}),
    new Player({'position': 'WLB', speed: 75, power: 50}),
    new Player({'position': 'MLB', speed: 70, power: 60}),
    new Player({'position': 'SLB', speed: 65, power: 60}),
    new Player({'position': 'WS', speed: 80, power: 50}),
    new Player({'position': 'FS', speed: 80, power: 40})
]

Team.alpha = new Team('Alpha', Team.offensiveRoster, Team.defensiveRoster);
Team.beta = new Team('Beta', Team.offensiveRoster, Team.defensiveRoster);

module.exports = Team;