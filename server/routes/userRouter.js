const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

router.route('/reg').post(async (req, res) => {
  const { email, password } = req.body.formData;
  req.session.user = {}
  if (validateEmail(email) && password) {
    const hashPass = await bcrypt.hash(password, +process.env.SALT);
    try {
      const newUser = await User.create({
        email,
        password: hashPass,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.email,
      };
      return res.json({ id: newUser.id, email: newUser.email });
    } catch (error) {
      return res.sendStatus(405);
    }
  } else {
    return res.sendStatus(403);
  }
});
router.route('/login').post(async (req, res) => {
  const { email, password } = req.body.loginForm;
  if (email && password) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (
        currentUser &&
        (await bcrypt.compare(password, currentUser.password))
      ) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.email,
        };
        return res.json({ id: currentUser.id, email: currentUser.email });
      }
      return res.sendStatus(401);
    } catch (err) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
});

router.route('/check').get((req, res) => {
  if (req.session?.user) {
    return res.json({ id: req.session.user.id, email: req.session.user.name });
  }
  res.sendStatus(401);
});

router.route('/logout').get((req, res) => {
  req.session.destroy();
  res.clearCookie('sId');
});

module.exports = router;
