
exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table.string("username", 255).notNullable().unique();
      table.string("password", 255).notNullable();
      table.string("name", 255).notNullable()
      table.string("email", 255).notNullable().unique();
      table.string("city", 255).notNullable();
      table.string("avatarURL", 255).defaultTo(null)
    })
    .createTable("restaurants", table => {
      table.increments();
      table.string("restaurantName", 255).notNullable();
      table.string("streetAddress", 255).notNullable();
      table.string("city", 255).notNullable()
      table.string("zipcode", 255)
      table.integer("phoneNumber", 255)
      table.string("websiteURL", 255)
      table.string("restaurantPictureURL", 255)
    })  
    .createTable("passports", table => {
      table.increments();
      table.integer("user_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.integer("restaurant_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('restaurants')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.bool("stamped").defaultTo(false)
      table.string("notes", 1024)
      table.integer("myRating", 3)
    })
}

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('restaurants')
  .dropTableIfExists("passports")
};
