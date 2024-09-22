const express = require('express');
const fs = require('fs');
const path = require('path');
const tasks = require('../data.json');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

const dataFilePath = path.join(__dirname, '..', 'data.json');

router.post('/save',authenticateToken, (req, res) => {
  const task = req.body;
  tasks.push({ ...task, QuoteId: tasks.length + 1 });

  fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), (error) => {
    if (error) {
      return res.status(500).json({ message: 'Failed to save data', error });
    }
    return res.status(200).json({ message: 'Data saved successfully' });
  });
  console.log(tasks);
});

router.get('/read',authenticateToken ,(req, res) => {
  if (fs.existsSync(dataFilePath)) {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return res.status(200).json(JSON.parse(data));
  } else {
    return res.status(404).json({ message: 'No data found' });
  }
});

module.exports = router;
