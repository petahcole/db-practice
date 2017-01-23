var bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 3')
    .then(function () {
      const seedUsers = [{
        id: 1,
        email: 'cbatson@gmail.com',
        password: bcrypt.hashSync('bacon', 7)
      },{
        id: 2,
        email: 'jackiebatson@gmail.com',
        password: bcrypt.hashSync('flowers', 7)
      }]
      return knex('users').insert(seedUsers)
    });
};
