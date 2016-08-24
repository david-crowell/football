var Play = require('./play');
var Player = require('./player');
var Team = require('./team');

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

var rbIformationAssignments = {
    'FB': 'RB',
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

module.exports = {};

module.exports.offense = {
    leftA: function(team){ return new Play(team.offense, runLeftAssignments, 'LA'); },
    leftB: function(team){ return new Play(team.offense, runLeftAssignments, 'LB'); },
    leftC: function(team){ return new Play(team.offense, runLeftAssignments, 'LC'); },
    leftD: function(team){ return new Play(team.offense, runLeftAssignments, 'LD'); },
    rightA: function(team){ return new Play(team.offense, runRightAssignments, 'RA'); },
    rightB: function(team){ return new Play(team.offense, runRightAssignments, 'RB'); },
    rightC: function(team){ return new Play(team.offense, runRightAssignments, 'RC'); },
    rightD: function(team){ return new Play(team.offense, runRightAssignments, 'RD'); },
    iRight: function(team){ return new Play(team.offense, rbIformationAssignments, 'RB'); }
}

module.exports.defense = {
    fourThreeOver: function(team){ return new Play(team.defense, fourThreeOverAssignments); },
    fourThreeUnder: function(team){ return new Play(team.defense, fourThreeUnderAssignments); }
}