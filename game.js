var Player = require('./player');
var Gap = require('./gap');
var Play = require('./play');
var Judge = require('./judge');
var Playbook = require('./playbook');
var Series = require('./series');

var Game = function(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.startSeries(homeTeam, awayTeam, 20);
}
Game.prototype.startSeries = function(offensiveTeam, defensiveTeam, scrimmage) {
    this.series = new Series(offensiveTeam, defensiveTeam, scrimmage);
}
Game.prototype.run = function(offensivePlayName, defensivePlayName) {
    this.series.runPlayNames(offensivePlayName, defensivePlayName);
    if (this.series.isFirstDown()) {
        console.log("FIRST DOWN!");
    }
    if (this.series.isTouchdown()) {
        console.log("TOUCHDOWN!");
    }
    if (this.series.isTurnover()) {
        console.log("TURNOVER ON DOWNS!");
    }
}

module.exports = Game;