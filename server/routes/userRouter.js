const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

router.route('/reg').post(async (req, res) => {
  const { name, email, password } = req.body.user;

  if (name && validateEmail(email) && password) {
    const hashPass = await bcrypt.hash(password, +process.env.SALT);
    try {
      const newUser = await User.create({
        name,
        email,
        password: hashPass,
      });

      req.session.user = {
        id: newUser.id,
        name: newUser.name,
      };
      return res.json({ id: newUser.id, name: newUser.name });
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
          name: currentUser.name,
          telegram: currentUser.telegram,
        };
        return res.json({ user: req.session.user });
      }
      return res.sendStatus(401);
    } catch (err) {
      return res.sendStatus(401);
    }
  } else {
    return res.sendStatus(401);
  }
});

router.get('/check', (req, res) => {
  if (req.session?.user) {
    return res.json({ id: req.session.user.id, name: req.session.user.name });
  }
  res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sesid').redirect('/');
});

module.exports = router;
