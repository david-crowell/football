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
        console.log('offensive player: ' + this.offensePlayers[i].position + ' ' + this.offensePlayers[i].getPower());
        offensePower += this.offensePlayers[i].getPower();
    };

    var defensePower = 0;
    for (var i = this.defensePlayers.length - 1; i >= 0; i--) {
        console.log('defensive player: ' + this.defensePlayers[i].position + ' ' + this.defensePlayers[i].getPower());
        defensePower += this.defensePlayers[i].getPower();
    };

    return offensePower - defensePower;
}
Gap.prototype.getWinner = function() {
    if (this.winner !== undefined) {
        return this.winner;
    }
    if (this.offensePlayers.length == 0) {
        this.winner = OFFENSE;
    } else if (this.defensePlayers.length == 0) {
        this.winner = DEFENSE;
    } else {
        console.log("Gap: " + this.name);
        var difference = this.calculate();
        console.log("Difference: " + difference);
        var random = this.getRandom();
        console.log("Random: " + random);
        var modified = (random + difference);
        console.log("Modified: " + modified);
        if (modified > 0) {
            console.log("Offense wins!");
            this.winner = OFFENSE;
        } else {
            console.log("Defense wins!");
            this.winner =  DEFENSE;
        }
    }
    return this.winner;
}

//Between -25 and +25
Gap.prototype.getRandom = function() {
    return 50 * (0.5 - (Math.random()));
}

module.exports = Gap;