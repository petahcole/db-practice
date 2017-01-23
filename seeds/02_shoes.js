
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "shoes"; ALTER SEQUENCE shoes_id_seq RESTART WITH 5')
    .then(function () {
      const seedShoes = [{
        id: 1,
        shoe_brand: 'vans',
        is_new: false,
        user_id: 1
      },{
        id: 2,
        shoe_brand: 'nike',
        is_new: true,
        user_id: 1
      },{
        id: 3,
        shoe_brand: 'madewell',
        is_new: true,
        user_id: 2
      },{
        id: 4,
        shoe_brand: 'converse',
        is_new: false,
        user_id: 2
      }]
      return knex('shoes').insert(seedShoes)
    });
};
