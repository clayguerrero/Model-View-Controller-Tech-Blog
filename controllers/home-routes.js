const router = require("express").Router();
const { Comment, Post, User } = require("../models");

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

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["username"] },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });

    const posts = postData.get({plain: true})

    res.render('post', {
      ...this.post,
      loggedIn: req.session.loggedIn
    })

  } catch (error) {
    res.status(500).json({message: 'cannot get post by id'})
  }
});

module.exports = router;
