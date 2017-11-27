
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('eventparticipating').del()
    .then(function () {
      // Inserts seed entries
      return knex('eventparticipating').insert([
        {eventid: 1, inviteeid: 2, status: false},
        {eventid: 1, inviteeid: 4, status: true},
        {eventid: 1, inviteeid: 5, status: true},
        {eventid: 1, inviteeid: 6, status: true},
        {eventid: 1, inviteeid: 7, status: true},
        {eventid: 1, inviteeid: 8, status: true},
        {eventid: 2, inviteeid: 4, status: true},
        {eventid: 2, inviteeid: 6, status: true},
        {eventid: 2, inviteeid: 8, status: false},
        {eventid: 2, inviteeid: 10, status: false},
        {eventid: 3, inviteeid: 2, status: true},
        {eventid: 3, inviteeid: 3, status: false},
        {eventid: 4, inviteeid: 1, status: true},
        {eventid: 6, inviteeid: 3, status: false},
        {eventid: 6, inviteeid: 4, status: true},
        {eventid: 6, inviteeid: 8, status: true},
        {eventid: 6, inviteeid: 9, status: true},
        {eventid: 7, inviteeid: 6, status: true},
        {eventid: 7, inviteeid: 7, status: false},
        {eventid: 8, inviteeid: 1, status: false}
      ]);
    });
};
