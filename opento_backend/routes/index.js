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
  knex.raw(`select users.id, users.username, users.picurl, users.uid from users join friendships on users.id = friendships.friendid2 where friendships.friendid1 = '${req.params.id}' and friendships.pending = 'false'`)
  .then(data => {
    res.json(data.rows)
  });
});

// create event part 1
router.post('/createevent/:location', function(req, res, next) {
  knex.raw(`insert into events (location, clicks, eventcreatorid, eventcreatorname, active, creatorpic) values ( '${req.params.location}', 0, '${req.body.id}', '${req.body.username}', TRUE, '${req.body.picurl}' ) returning * `)
  .then(data => {

    res.json(data.rows)
  })
})

//populate invited
router.post('/populateinvited', function(req, res, next) {
  console.log("req.body", req.body)
  for(let i = 0; i < req.body.friends.length; i++) {
  knex.raw(`INSERT INTO eventinvited (eventid, inviteeid, clicked) values ('${req.body.id}', '${req.body.friends[i]}', FALSE) returning *`)
  .then(data1 => {
    console.log("data.rows pop", data1.rows)
    res.json(data1.rows)
  })}
})

/* GET ALL MESSAGES FROM USER TO USER */
router.get(`/:id/message/:mid`, function(req,res,next){
  knex.raw(`
      select messages.*, users.username as from_name
      from messages
      inner join users on users.id = messages.from_id
      WHERE (from_id = ${req.params.id} and to_id = ${req.params.mid})
      OR (from_id = ${req.params.mid} and to_id = ${req.params.id})
      ORDER BY created_at
    `)
    .then(data => {

      let someData = [];

      data.rows.map(message => {
        let messageObject = {
          _id: message.id,
          text: message.message,
          createdAt: new Date(),
          user: {
            _id: req.params.id == message.from_id ? 1 : 2,
            name: message.from_name
          }
        }
        someData.unshift(messageObject)
      })
      res.json(someData)
    })
})

/* POST NEW MESSAGE FROM USER TO USER */
router.post('/:id/message/:mid', function(req,res,next){
  knex('messages')
    .insert({from_id: `${req.params.id}`, to_id: `${req.params.mid}`, message: `${req.body.message}`})
    .then(data => {
      res.send(data)
    })
})


module.exports = router;
