var Gap = require('./gap');

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
    for (var i = 0; i < Gap.GAP_NAMES.length; i++) {
        var gapName = Gap.GAP_NAMES[i];
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
module.exports = Judge;