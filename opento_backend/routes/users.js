var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var cors = require('cors')

/* GET users listing. */
router.get('/all/:id', function(req, res, next) {
  knex.raw(`SELECT * FROM users where not id = '${req.params.id}'`)
  .then(data => {
    res.json(data.rows)
  });
});

// get individual user
router.get('/:uid', function(req, res, next) {
  knex.raw(`SELECT * FROM users where uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});

//get feed
router.get('/feed/:uid', function(req, res, next) {
  knex.raw(`SELECT events.location, events.creatorpic, events.eventcreatorname, events.clicks, events.active, eventinvited.clicked FROM events join eventinvited on events.id = eventinvited.eventid join users on eventinvited.inviteeid = users.id  where events.active = TRUE and users.uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});

//get active
router.get('/active/:uid', function(req, res, next) {
  knex.raw(`SELECT events.location, events.creatorpic, events.eventcreatorname, events.active, eventinvited.clicked FROM events join eventinvited on events.id = eventinvited.eventid join users on eventinvited.inviteeid = users.id  where events.active = TRUE and eventinvited.clicked = TRUE and users.uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});


//get myevents
router.get('/myevents/:username', function(req, res, next) {
  knex.raw(`SELECT * from events where events.eventcreatorname = '${req.params.username}' and events.active = TRUE`)
  .then(data => {
    res.json(data.rows)
  });
});


// get friendIDS
router.get('/friendshipids/:id', function(req, res, next) {
  knex.raw(`SELECT users.id from users join friendships on friendships.friendid2 = users.id where friendships.friendid1 = '${req.params.id}' and friendships.pending = 'false'`)
  .then(data => {
    res.json(data.rows)
  });
});

// get pending friend request
router.get('/pendingfr/:id', function(req, res, next) {
  knex.raw(`SELECT users.id from users join friendships on friendships.friendid2 = users.id where friendships.friendid1 = '${req.params.id}' and friendships.pending = 'true'`)
  .then(data => {
    res.json(data.rows)
  });
});


// create user (sign in)
router.post('/', function(req, res, next) {
      knex.raw(`INSERT INTO users (username, firstname, lastname, password, email, picurl, uid) VALUES ('${req.body.username}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.password}', '${req.body.email}', '${req.body.picurl}', '${req.body.uid}') returning *`)
      .then(data1 => {
        res.json(data1)

      }).catch((error) => {
      console.log(error);
    })
});


//send friend request
router.post('/:myid/:friendid', function(req, res, next) {
      knex.raw(`INSERT INTO friendships (friendid1, friendid2, pending) VALUES (${req.params.myid}, ${req.params.friendid}, 'true') returning *`)
      .then(data1 => {
        res.json(data1)
      }).catch((error) => {
      console.log(error);
    })
});


// get pending friend requests
router.get('/pendingfrinfo/:id', function(req, res, next) {
  knex.raw(`SELECT * from users join friendships on users.id = friendships.friendid1 where friendships.friendid2 = '${req.params.id}' and friendships.pending = 'true'`)
  .then(data => {
    res.json(data.rows)
  });
});

// accept friend request
router.post('/acceptfriend/:myid/:friendid', function(req, res, next) {
      knex.raw(`update friendships set pending = 'false' where friendships.friendid2 = '${req.params.myid}' and friendships.friendid1 = '${req.params.friendid}'`)
      .then(data => {
        knex.raw(`INSERT INTO friendships (friendid1, friendid2, pending) VALUES (${req.params.myid}, ${req.params.friendid}, 'false') returning *`)
      .then(data1 => {
        console.log("data.rows after fr", data.rows)
        res.json(data.rows)
      })
    })
});

module.exports = router;
