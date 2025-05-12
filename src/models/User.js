const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Ensure this path is correct

// Define the User model
const User = sequelize.define('User', {
  // Define the fields in the `users` table
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // ensures email is unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Ensure this matches your table name in the database
  timestamps: true,    // Optional: If you want to track createdAt and updatedAt
});

// Ensure the table is created if it doesn't exist
User.sync();  // This will create the table if it doesn't exist

module.exports = User;
