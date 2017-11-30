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

// create event part 1
router.post('/createevent/:location', function(req, res, next) {
  knex.raw(`insert into events (location, clicks, eventcreatorid, eventcreatorname, active, creatorpic) values ( '${req.params.location}', 0, '${req.body.id}', '${req.body.username}', TRUE, '${req.body.picurl}' ) returning *`)
  .then(data => {
    console.log("data.rows", data.rows)
    res.json(data.rows[0])
  })
})




module.exports = router;
