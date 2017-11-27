
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('eventinvited').del()
    .then(function () {
      // Inserts seed entries
      return knex('eventinvited').insert([
        {eventid: 1, inviteeid: 2, clicked: true},
        {eventid: 1, inviteeid: 4, clicked: true},
        {eventid: 1, inviteeid: 5, clicked: true},
        {eventid: 1, inviteeid: 6, clicked: true},
        {eventid: 1, inviteeid: 7, clicked: true},
        {eventid: 1, inviteeid: 8, clicked: true},
        {eventid: 2, inviteeid: 2, clicked: false},
        {eventid: 2, inviteeid: 4, clicked: true},
        {eventid: 2, inviteeid: 6, clicked: true},
        {eventid: 2, inviteeid: 8, clicked: true},
        {eventid: 2, inviteeid: 10, clicked: true},
        {eventid: 3, inviteeid: 2, clicked: true},
        {eventid: 3, inviteeid: 3, clicked: true},
        {eventid: 3, inviteeid: 10, clicked: false},
        {eventid: 4, inviteeid: 1, clicked: true},
        {eventid: 4, inviteeid: 2, clicked: false},
        {eventid: 4, inviteeid: 7, clicked: false},
        {eventid: 5, inviteeid: 1, clicked: false},
        {eventid: 5, inviteeid: 5, clicked: false},
        {eventid: 5, inviteeid: 6, clicked: false},
        {eventid: 6, inviteeid: 3, clicked: true},
        {eventid: 6, inviteeid: 4, clicked: true},
        {eventid: 6, inviteeid: 8, clicked: true},
        {eventid: 6, inviteeid: 9, clicked: true},
        {eventid: 7, inviteeid: 6, clicked: true},
        {eventid: 7, inviteeid: 7, clicked: true},
        {eventid: 8, inviteeid: 1, clicked: true},
      ]);
    });
};
