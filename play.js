var OFFENSE = 1;
var DEFENSE = -1;
var NO_ASSIGNMENT = '-';
// assignments = { positionName: gapName }
var Play = function(players, assignments) {
    this.players = players;
    this.assignments = assignments;
    return this;
}
Play.prototype.unassignedPlayers = function() {
    return this.playersInGap(NO_ASSIGNMENT);s
}
Play.prototype.playersInGap = function(gapName) {
    var positions = this.positionsInGap(gapName);
    var players = [];
    for (var i = positions.length - 1; i >= 0; i--) {
        var player = this.playerForPosition(positions[i]);
        if (player !== undefined && player !== null) {
            players.push(player);
        }
    };
    return players;
}
Play.prototype.positionsInGap = function(gapName) {
    var positions = [];
    for (var position in this.assignments) {
        if (gapName == this.assignments[position]) {
            positions.push(position);
        }
    }
    return positions;
}
Play.prototype.playerForPosition = function(positionName) {
    return this.players.filter(function(player) {
        return player.position == positionName;
    })[0];
}
Play.OFFENSE = OFFENSE
Play.prototype.OFFENSE = OFFENSE;
Play.DEFENSE = DEFENSE;
Play.prototype.DEFENSE = DEFENSE;
Play.NO_ASSIGNMENT = NO_ASSIGNMENT;
Play.prototype.NO_ASSIGNMENT = NO_ASSIGNMENT;
module.exports = Play;