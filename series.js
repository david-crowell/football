var Player = require('./player');
var Gap = require('./gap');
var Play = require('./play');
var Judge = require('./judge');
var Playbook = require('./playbook');

var Series = function(offensiveTeam, defensiveTeam, scrimmage) {
    this.offensiveTeam = offensiveTeam;
    this.defensiveTeam = defensiveTeam;
    this.scrimmage = scrimmage;
    this.setFirstDown();
    return this;
}
Series.prototype.calculateYardage = function(offensivePlay, defensivePlay) {
    var judge = new Judge(offensivePlay, defensivePlay);
    var yardage = judge.yardsInGap(offensivePlay.targetGap);
    return yardage;
}
Series.prototype.calculateTarget = function() {
    this.target = Math.min(this.scrimmage + 10, 100);
    return this.target;
}
Series.prototype.setFirstDown = function() {

    this.calculateTarget();
    this.down = 1;
    return this.down;
}
Series.prototype.accountForPlay = function(yardage) {
    this.scrimmage += yardage;
    this.down += 1;
    if (this.scrimmage >= this.target) {
        this.setFirstDown();
    }
}
Series.prototype.isFirstDown = function() {
    return this.down == 1;
}
Series.prototype.isTouchdown = function() {
    return this.scrimmage >= 100;
}
Series.prototype.isTurnover = function() {
    return this.down > 4;
}
Series.prototype.run = function(offensivePlay, defensivePlay) {
    var yardage = this.calculateYardage(offensivePlay, defensivePlay);
    console.log(this.down + " and " + (this.target - this.scrimmage) + " from the " + this.scrimmage);
    console.log(yardage + " yards running at " + offensivePlay.targetGap);
    this.accountForPlay(yardage);
}
Series.prototype.runPlayNames = function(offensivePlayName, defensivePlayName) {
    var offensivePlay = Playbook.offense[offensivePlayName](this.offensiveTeam);
    var defensivePlay = Playbook.defense[defensivePlayName](this.defensiveTeam);
    this.run(offensivePlay, defensivePlay);
}

module.exports = Series;