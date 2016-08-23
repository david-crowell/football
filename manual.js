var Player = require('./player');
var Gap = require('./gap');
var Play = require('./play');
var Judge = require('./judge');

var runLeftAssignments = {
    'LTE': 'LD',
    'LT': 'LC',
    'LG': 'LB',
    'C': 'LA',
    'RG': 'RA',
    'RT': 'RB',
    'RTE': 'RC'
};

var fourThreeAssignments = {
    'WDE': 'LC',
    'WDT': 'LA',
    'SDT': 'RB',
    'SDE': 'RC',
    'WLB': 'LB',
    'MLB': 'RA',
    'SLB': 'RD',
    'WS': 'LD',
    'SS': '-'
};

var twoTightEndPlayers = [
    new Player({'position': 'LTE', speed: 50, power: 50}),
    new Player({'position': 'LT', speed: 25, power: 75}),
    new Player({'position': 'LG', speed: 15, power: 80}),
    new Player({'position': 'C', speed: 20, power: 80}),
    new Player({'position': 'RG', speed: 15, power: 85}),
    new Player({'position': 'RT', speed: 20, power: 80}),
    new Player({'position': 'RTE', speed: 50, power: 50})
]

var fourThreePlayers = [
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

function test() {
    // var leftTackle = new Player({'speed': 50, 'power': 45, 'position': 'LT'});
    // var weakEnd = new Player({'speed': 50, 'power': 55, 'position': 'WDE'});
    // var gap = new Gap('LC', [leftTackle], [weakEnd]);

    // var result = gap.getWinner();
    var offense = new Play(twoTightEndPlayers, runLeftAssignments);
    var defense = new Play(fourThreePlayers, fourThreeAssignments);

    var judge = new Judge(offense, defense);
    var winners = judge.findWinners();

    console.log(winners);

    return winners;
}
test();