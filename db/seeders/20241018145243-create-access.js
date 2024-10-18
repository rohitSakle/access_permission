"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "accesses",
      [
        {
          type: "create",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "update",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "delete",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
        {
          type: "view",
          created_at: new Date(),
          updated_at: new Date(),
          deleted_at: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("accesses", null, {});
  },
};
