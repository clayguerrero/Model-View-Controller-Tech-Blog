const { Post } = require('../models')

const postData = [
  {
    title: "post One",
    post: "Here is the FIRST post. This is just an example for testing perposes.",
    user_id: 1,
  },
  {
    title: "post Two",
    post: "Here is the SECOND post. This is just an example for testing perposes.",
    user_id: 2,
  },
  {
    title: "post Three",
    post: "Here is the THIRD post. This is just an example for testing perposes.",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost
