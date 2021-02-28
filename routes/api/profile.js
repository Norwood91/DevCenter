const express = require('express');
const router = express.Router();

//Test route, Public route
router.get('/', (req, res) => {
  res.send('Profile Route');
});

module.exports = router;
