"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "electronic",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          name: "elctric",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          name: "food",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          name: "medicen",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
