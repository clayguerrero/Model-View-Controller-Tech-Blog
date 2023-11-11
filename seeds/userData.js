const { User } = require('../models')

const userData = [
  {
    username: "testUser1",
    email: "user1@mail.com",
    password: "passpass",
  },
  {
    username: "testUser2",
    email: "user2@mail.com",
    password: "passpass",
  },
  {
    username: "testUser3",
    email: "user3@mail.com",
    password: "passpass",
  },
];

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
