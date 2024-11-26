const express = require('express');
const fs = require('fs').promises; 
const path = require('path');
const tasks = require('../data.json'); 
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

const dataFilePath = path.join(__dirname, '..', 'data.json');

router.post('/save', authenticateToken, async (req, res) => {
  const task = req.body;

  try {
    if (!task.quoteTitle || !task.author || !task.category) {
      return res.status(400).json({ message: 'Invalid data format' });
    }

    tasks.push({ ...task, QuoteId: tasks.length + 1 });

    await fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2));

    console.log(tasks); 
    return res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error.message); 
    return res.status(500).json({ message: 'Failed to save data', error: error.message });
  }
});

router.get('/read', authenticateToken, async (req, res) => {
  try {
    if (await fs.stat(dataFilePath)) {
      const data = await fs.readFile(dataFilePath, 'utf8');
      return res.status(200).json(JSON.parse(data));
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      return res.status(404).json({ message: 'No data found' });
    }
    console.error('Error reading data:', error.message); 
    return res.status(500).json({ message: 'Failed to read data', error: error.message });
  }
});

module.exports = router;
