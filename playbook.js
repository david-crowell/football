var Play = require('./play');
var Player = require('./player');

var runLeftAssignments = {
    'LTE': 'LD',
    'LT': 'LC',
    'LG': 'LB',
    'C': 'LA',
    'RG': 'RA',
    'RT': 'RB',
    'RTE': 'RC'
};

var runRightAssignments = {
    'LTE': 'LC',
    'LT': 'LB',
    'LG': 'LA',
    'C': 'RA',
    'RG': 'RB',
    'RT': 'RC',
    'RTE': 'RD'
};

var fourThreeOverAssignments = {
    'WDE': 'LC',
    'WDT': 'LA',
    'SDT': 'RB',
    'SDE': 'RC',
    'WLB': 'LB',
    'MLB': 'RA',
    'SLB': 'RD',
    'WS': 'LD',
    'SS': Play.NO_ASSIGNMENT
};

var fourThreeUnderAssignments = {
    'WDE': 'LD',
    'WDT': 'LA',
    'SDT': 'RA',
    'SDE': 'RC',
    'WLB': 'LC',
    'MLB': 'RB',
    'SLB': 'RD',
    'WS': 'LB',
    'SS': Play.NO_ASSIGNMENT
};

var twoTightEndPlayers = [
    new Player({'position': 'LTE', speed: 50, power: 50}),
    new Player({'position': 'LT', speed: 25, power: 75}),
    new Player({'position': 'LG', speed: 15, power: 80}),
    new Player({'position': 'C', speed: 20, power: 80}),
    new Player({'position': 'RG', speed: 15, power: 85}),
    new Player({'position': 'RT', speed: 20, power: 80}),
    new Player({'position': 'RTE', speed: 60, power: 60})
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

module.exports = {};

module.exports.offense = {
    leftA: new Play(twoTightEndPlayers, runLeftAssignments, 'LA'),
    leftB: new Play(twoTightEndPlayers, runLeftAssignments, 'LB'),
    leftC: new Play(twoTightEndPlayers, runLeftAssignments, 'LC'),
    leftD: new Play(twoTightEndPlayers, runLeftAssignments, 'LD'),
    rightA: new Play(twoTightEndPlayers, runRightAssignments, 'RA'),
    rightB: new Play(twoTightEndPlayers, runRightAssignments, 'RB'),
    rightC: new Play(twoTightEndPlayers, runRightAssignments, 'RC'),
    rightD: new Play(twoTightEndPlayers, runRightAssignments, 'RD')
}

module.exports.defense = {
    fourThreeOver: new Play(fourThreePlayers, fourThreeOverAssignments),
    fourThreeUnder: new Play(fourThreePlayers, fourThreeUnderAssignments)
}