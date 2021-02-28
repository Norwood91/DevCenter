const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcyrpt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const User = require('../../models/User');
//Register User route, Public route
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({
          errors: [{ msg: 'A user with those credentials already exists' }],
        });
      }

      //Get users gravatar (avatar)
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      //Create instance of user
      user = new User({
        name,
        email,
        avatar,
        password,
      });

      //Create salt
      const salt = await bcyrpt.genSalt(10);

      //Hash, Encrypt password
      user.password = await bcyrpt.hash(password, salt);
      await user.save();

      //Return jsonwebtoken
      res.send('User successfully registered');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
