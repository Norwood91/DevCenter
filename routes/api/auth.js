const express = require('express');
const router = express.Router();

//Test route, Public route
router.get('/', (req, res) => {
  res.send('Auth Route');
});

module.exports = router;
