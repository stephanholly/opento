var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var cors = require('cors')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM users`)
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

// create user (sign in)
router.post('/', function(req, res, next) {
      knex.raw(`INSERT INTO users (username, firstname, lastname, password, email, picurl, uid) VALUES ('${req.body.username}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.password}', '${req.body.email}', '${req.body.picurl}', '${req.body.uid}') returning *`)
      .then(data1 => {
        res.json(data1)

      }).catch((error) => {
      console.log(error);
    })
});

module.exports = router;
