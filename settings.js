var Settings = {
    debug: false,
    log: function(thing) {
        if (Settings.debug) {
            console.log(thing);
        }
    }
}

module.exports = Settings;