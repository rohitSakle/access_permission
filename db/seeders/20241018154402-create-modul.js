"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "modules",
      [
        {
          name: "home",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          name: "product",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          name: "catgories",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("modules", null, {});
  },
};
