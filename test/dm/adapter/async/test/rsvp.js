var test        = require("./../test"),
    RSVP        = require('rsvp'),
    RSVPAdapter = require('../../../../../src/dm/adapter/async/rsvp');

test(RSVP, RSVP.Promise, RSVPAdapter, {
    title: "rsvp.js"
});