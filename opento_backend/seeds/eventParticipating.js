
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('eventParticipating').del()
    .then(function () {
      // Inserts seed entries
      return knex('eventParticipating').insert([
        {eventID: 1, inviteeID: 2, status: false},
        {eventID: 1, inviteeID: 4, status: true},
        {eventID: 1, inviteeID: 5, status: true},
        {eventID: 1, inviteeID: 6, status: true},
        {eventID: 1, inviteeID: 7, status: true},
        {eventID: 1, inviteeID: 8, status: true},
        {eventID: 2, inviteeID: 4, status: true},
        {eventID: 2, inviteeID: 6, status: true},
        {eventID: 2, inviteeID: 8, status: false},
        {eventID: 2, inviteeID: 10, status: false},
        {eventID: 3, inviteeID: 2, status: true},
        {eventID: 3, inviteeID: 3, status: false},
        {eventID: 4, inviteeID: 1, status: true},
        {eventID: 6, inviteeID: 3, status: false},
        {eventID: 6, inviteeID: 4, status: true},
        {eventID: 6, inviteeID: 8, status: true},
        {eventID: 6, inviteeID: 9, status: true},
        {eventID: 7, inviteeID: 6, status: true},
        {eventID: 7, inviteeID: 7, status: false},
        {eventID: 8, inviteeID: 1, status: false}
      ]);
    });
};
