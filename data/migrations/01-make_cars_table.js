/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.string("vin").notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("title");
    tbl.string("transmission");
  });
};

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
  return knex.schema.dropTableIfExists("cars");
};
