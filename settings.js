var Settings = {
    debug: true,
    log: function(thing) {
        if (Settings.debug) {
            console.log(thing);
        }
    }
}

module.exports = Settings;