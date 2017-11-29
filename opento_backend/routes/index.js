var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var cors = require('cors')

// get user total clicks
router.get('/events/clicksum/:uid', function(req, res, next) {
  knex.raw(`SELECT sum(clicks) FROM events join users on events.eventcreatorid = users.id where users.uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});

// get user total events created
router.get('/events/eventsum/:uid', function(req, res, next) {
  knex.raw(`SELECT count(events) FROM events join users on events.eventcreatorid = users.id where users.uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});

// get user total friends
router.get('/friendships/:uid', function(req, res, next) {
  knex.raw(`SELECT count(*) FROM friendships join users on friendships.friendid1 = users.id where friendships.pending = 'false' and users.uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});

// get friends
router.get('/friends/:id', function(req, res, next) {
  knex.raw(`select users.id, users.username, users.picurl, users.uid from users join friendships on users.id = friendships.friendid2 where friendships.friendid1 = '${req.params.id}'`)
  .then(data => {
    res.json(data.rows)
  });
});







module.exports = router;
