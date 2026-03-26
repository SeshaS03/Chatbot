import { Router } from 'express';
import ThreadModel from '../models/thread.model.js';

const router = Router();

// Create a new thread
router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const thread = await ThreadModel.create(title);
    res.status(201).json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all threads
router.get('/', async (req, res) => {
  try {
    const threads = await ThreadModel.findAll();
    res.json(threads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single thread by id
router.get('/:id', async (req, res) => {
  try {
    const thread = await ThreadModel.findById(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a thread
router.put('/:id', async (req, res) => {
  const { title } = req.body;
  try {
    const thread = await ThreadModel.update(req.params.id, title);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json(thread);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a thread
router.delete('/:id', async (req, res) => {
  try {
    const thread = await ThreadModel.delete(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json({ message: 'Thread deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
