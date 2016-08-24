var Player = require('./player');
var Gap = require('./gap');
var Play = require('./play');
var Judge = require('./judge');
var Playbook = require('./playbook');

function run(offensivePlay, defensivePlay) {
    var judge = new Judge(offensivePlay, defensivePlay);
    var yardage = judge.yardsInGap(offensivePlay.targetGap);
    return yardage;
}

function randomSelect(array) {
    var i = Math.floor(Math.random() * 1000) % array.length;
    return array[i];
}

function test() {
    var scrimmage = 20;
    var target = 30;
    var down = 1;
    while (down <= 4 && scrimmage < 100) {
        var offensivePlay = Playbook.offense.leftD;
        var defensivePlay = Playbook.defense.fourThreeOver;
        var yards = run(offensivePlay, defensivePlay);
        console.log(down + " and " + (target - scrimmage) + " from the " + scrimmage);
        console.log(yards + " yards running at " + offensivePlay.targetGap);
        scrimmage += yards;
        if (scrimmage >= target) {
            target = Math.min(scrimmage + 10, 100);
            down = 1;
            console.log("FIRST DOWN!");
        } else {
            down += 1;
        }
    };
    if (scrimmage >= 100) {
        console.log("TOUCHDOWN!");
    } else if (down > 4) {
        console.log("TURNOVER ON DOWNS!");
    }
}
test();