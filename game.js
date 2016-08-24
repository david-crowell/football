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
    this.offense = offensiveTeam;
    this.series = new Series(offensiveTeam, defensiveTeam, scrimmage);
}
Game.prototype.run = function(offensivePlayName, defensivePlayName) {
    this.series.runPlayNames(offensivePlayName, defensivePlayName);
    if (this.series.isFirstDown()) {
        console.log("FIRST DOWN!");
    }
    if (this.series.isTouchdown()) {
        this.handleTouchdown();
    }
    if (this.series.isTurnover()) {
        this.handleTurnover();
    }
}
Game.prototype.handleTouchdown = function() {
    console.log("TOUCHDOWN!");
    var toggledTeams = this.togglePossession();
    this.startSeries(toggledTeams.offense, toggledTeams.defense, 20);
}
Game.prototype.handleTurnover = function() {
    console.log("TURNOVER ON DOWNS!");
    var toggledTeams = this.togglePossession();
    this.startSeries(toggledTeams.offense, toggledTeams.defense, (100 - this.series.scrimmage));
}
Game.prototype.togglePossession = function() {
    return {
        offense: this.series.defensiveTeam,
        defense: this.series.offensiveTeam
    };
}

module.exports = Game;