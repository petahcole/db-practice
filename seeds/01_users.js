
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 3')
    .then(function () {
      const seedUsers = [{
        id: 1,
        first_name: 'cole',
        last_name: 'batson',
        email: 'cbatson@gmail.com'
      },{
        id: 2,
        first_name: 'jackie',
        last_name: 'batson',
        email: 'jackiebatson@gmail.com'
      }]
      return knex('users').insert(seedUsers)
    });
};
