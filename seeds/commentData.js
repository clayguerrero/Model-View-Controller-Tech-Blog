const { Comment } = require("../models");

const commentData = [
  {
    text: "Amazing FIRST post!",
    user_id: 2,
    post_id: 1,
  },
  {
    text: "Amazing Second post!",
    user_id: 3,
    post_id: 2,
  },
  {
    text: "Amazing THRID post!",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
