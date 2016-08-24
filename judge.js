var Gap = require('./gap');

var GAP_NAMES = Gap.GAP_NAMES;
var DEFENSE_NEVER_WINS = -1;
var Judge = function(offensePlay, defensePlay) {
    this.offensePlay = offensePlay;
    this.defensePlay = defensePlay;
    return this;
}
Judge.prototype.findWinners = function() {
    if (this.winners) {
        return this.winners;
    }
    var gapToWinner = {};
    for (var i = 0; i < GAP_NAMES.length; i++) {
        var gapName = GAP_NAMES[i];
        var gap = new Gap(
            gapName, 
            this.offensePlay.playersInGap(gapName),
            this.defensePlay.playersInGap(gapName));
        var winner = gap.getWinner();
        gapToWinner[gapName] = winner;
    };
    this.winners = gapToWinner;
    return this.winners;
}
Judge.prototype.yardsInGap = function(gapName) {
    var winners = this.findWinners();
    var gapIndex = this.getGapIndex(gapName);
    var distance = this.distanceToFirstDefensiveWin(gapIndex, winners);
    var yardage = this.yardsForDistance(distance);
    console.log("Running on " + gapName + " free tackler " + distance + " gap(s) over yielding " + yardage + " yards");
    return yardage;
}
Judge.prototype.yardsForDistance = function(gapDistance) {
    var yardage = 0;
    if (gapDistance == DEFENSE_NEVER_WINS) {
        yardage = 50;
    } else {
        yardage = (4 * (gapDistance - 1) + ((Math.floor(Math.random() * 100)) % 4));
        if (gapDistance == 0) {
            yardage += 2;
        }
    } 
    if (this.defensePlay.unassignedPlayers().length) {
        yardage = 15 + ((Math.floor(Math.random() * 100)) % 5);
    } 
    return yardage;
}
Judge.prototype.getGapIndex = function(gapName) {
    for (var i = 0; i < GAP_NAMES.length; i++) {
        if (GAP_NAMES[i] == gapName) {
            return i;
        }
    }
}
Judge.prototype.distanceToFirstDefensiveWin = function(gapIndex, winners) {
    var distance = 0;
    if (this.defenseWins(gapIndex)) {
        return distance;
    }
    for (var i = 1; i < GAP_NAMES.length; i++) {
        var leftIndex = gapIndex - i;
        var rightIndex = gapIndex + i;
        if (this.validIndex(leftIndex)) {
            if (this.defenseWins(leftIndex)) {
                return i;
            }
        }
        if (this.validIndex(rightIndex)) {
            if (this.defenseWins(rightIndex)) {
                return i;
            }
        }
    };
    return DEFENSE_NEVER_WINS;
}
Judge.prototype.defenseWins = function(gapIndex) {
    return (this.winners[GAP_NAMES[gapIndex]] == Gap.DEFENSE);
}
Judge.prototype.validIndex = function(index) {
    return (index >= 0) && (index < GAP_NAMES.length);
}
module.exports = Judge;