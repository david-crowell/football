var Team = function(attributes, players) {
    this.attributes = attributes;
    this.players = players;
    return this;
}
Team.prototype.getPlayers = function() {
    return this.players;
}
module.exports = Team;