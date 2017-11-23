const functions = require('firebase-functions');

exports.date = functions.https.onRequest((req, res) => {
   const date = "dis is da date"
   res.status(200).json({ date: date });
})
