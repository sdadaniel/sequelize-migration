'use strict';

const {
  Sequelize,
  DataTypes
} = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('student', 'name', {
      type: DataTypes.STRING(1),
      allowNull: false
    });



  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.changeColumn('student', 'name', {
      type: DataTypes.STRING(255),
      allowNull: false
    });

  }
};