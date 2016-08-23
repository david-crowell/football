var Random = require('simjs-random');
var Settings = require('./settings');

var GAP_NAMES = ['LD', 'LC', 'LB', 'LA', 'RA', 'RB', 'RC', 'RD'];
var OFFENSE = 1;
var DEFENSE = -1;

var Gap = function(name, offensePlayers, defensePlayers) {
    this.name = name;
    this.offensePlayers = offensePlayers;
    this.defensePlayers = defensePlayers;
    return this;
}
Gap.GAP_NAMES = GAP_NAMES;
Gap.prototype.GAP_NAMES = GAP_NAMES;
Gap.OFFENSE = OFFENSE;
Gap.prototype.OFFENSE = 1;
Gap.DEFENSE = DEFENSE;
Gap.prototype.DEFENSE = -1;

Gap.prototype.calculate = function() {
    var offensePower = 0;
    for (var i = this.offensePlayers.length - 1; i >= 0; i--) {
        Settings.log('offensive player: ' + this.offensePlayers[i].position + ' ' + this.offensePlayers[i].getPower());
        offensePower += this.offensePlayers[i].getPower();
    };

    var defensePower = 0;
    for (var i = this.defensePlayers.length - 1; i >= 0; i--) {
        Settings.log('defensive player: ' + this.defensePlayers[i].position + ' ' + this.defensePlayers[i].getPower());
        defensePower += this.defensePlayers[i].getPower();
    };

    return offensePower - defensePower;
}
Gap.prototype.getWinner = function() {
    if (this.winner !== undefined) {
        return this.winner;
    }
    Settings.log("Gap: " + this.name);
    if (this.offensePlayers.length == 0) {
        this.winner = DEFENSE;
    } else if (this.defensePlayers.length == 0) {
        this.winner = OFFENSE;
    } else {
        var difference = this.calculate();
        var random = this.getRandom();
        var modified = (random + difference);
        Settings.log("Difference: " + difference);
        Settings.log("Random: " + random);
        Settings.log("Modified: " + modified);
        if (modified > 0) {
            this.winner = OFFENSE;
        } else {
            this.winner =  DEFENSE;
        }
    }
    if (this.winner == OFFENSE) {
        Settings.log("Offense wins!");
    } else {
        Settings.log("Defense wins!");
    }
    return this.winner;
}
Gap.prototype.getRandom = function() {
    return (new Random()).normal(0, 8);
}

module.exports = Gap;