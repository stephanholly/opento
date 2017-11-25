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

router.get('/:uid', function(req, res, next) {
  knex.raw(`SELECT * FROM users where uid = '${req.params.uid}'`)
  .then(data => {
    res.json(data.rows)
  });
});


router.post('/', function(req, res, next) {
      knex.raw(`INSERT INTO users (username, firstName, lastName, password, email, picUrl, uid) VALUES ('${req.body.username}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.password}', '${req.body.email}', '${req.body.picUrl}', '${req.body.uid}') returning *`)
      .then(data1 => {
        res.json(data1)

      }).catch((error) => {
      console.log(error);
    })
});

module.exports = router;
