"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          type: "admin",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "sub_admin",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "buyer",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "seller",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
