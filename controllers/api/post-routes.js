const router = require("express").Router();
const { User, Post } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (error) {
    res.status(500).json({ message: "no db found (all post data)" });
  }
});

module.exports = router;

