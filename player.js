var Player = function(attributes) {
    this.speed = attributes.speed;
    this.power = attributes.power;
    this.position = attributes.position;
    return this;
}
Player.prototype.getSpeed = function() {
    return this.speed;
}
Player.prototype.getPower = function() {
    return this.power;
}
Player.prototype.getPosition = function() {
    return this.position;
}
module.exports = Player;