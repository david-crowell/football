var Player = require('./player');
var Gap = require('./gap');
var Play = require('./play');
var Judge = require('./judge');
var Playbook = require('./playbook');
var Team = require('./team');
var Game = require('./game');

function run(offensivePlay, defensivePlay) {
    var judge = new Judge(offensivePlay, defensivePlay);
    var yardage = judge.yardsInGap(offensivePlay.targetGap);
    return yardage;
}

function randomSelect(array) {
    var i = Math.floor(Math.random() * 1000) % array.length;
    return array[i];
}

function getGame() {
    var homeTeam = Team.alpha;
    var awayTeam = Team.beta;

    var game = new Game(homeTeam, awayTeam);
    game.run('leftA', 'fourThreeUnder');
    return game;
}
module.exports.getGame = getGame;
if (require.main === module) {
    getGame();
}