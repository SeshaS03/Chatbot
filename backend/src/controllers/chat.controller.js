import express from 'express';
import ThreadModel from '../models/thread.model.js';
import MessageModel from '../models/message.model.js';
import ThreadDto from '../dto/thread.dto.js';
import MessageDto from '../dto/message.dto.js';

const router = express.Router();

// Create a new thread
router.post('/threads', async (req, res) => {
  const { title } = req.body;
  try {
    const thread = await ThreadModel.create(title);
    res.status(201).json(new ThreadDto(thread));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all threads
router.get('/threads', async (req, res) => {
  try {
    const threads = await ThreadModel.findAll();
    res.json(threads.map(t => new ThreadDto(t)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single thread by id
router.get('/threads/:id', async (req, res) => {
  try {
    const thread = await ThreadModel.findById(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json(new ThreadDto(thread));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a thread
router.put('/threads/:id', async (req, res) => {
  const { title } = req.body;
  try {
    const thread = await ThreadModel.update(req.params.id, title);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json(new ThreadDto(thread));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a thread
router.delete('/threads/:id', async (req, res) => {
  try {
    const thread = await ThreadModel.delete(req.params.id);
    if (!thread) return res.status(404).json({ error: 'Thread not found' });
    res.json({ message: 'Thread deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new message in a thread
router.post('/threads/:threadId/messages', async (req, res) => {
  const { sender, content } = req.body;
  try {
    const message = await MessageModel.create(req.params.threadId, sender, content);
    res.status(201).json(new MessageDto(message));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all messages for a thread
router.get('/threads/:threadId/messages', async (req, res) => {
  try {
    const messages = await MessageModel.findAllByThread(req.params.threadId);
    res.json(messages.map(m => new MessageDto(m)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single message by id
router.get('/messages/:id', async (req, res) => {
  try {
    const message = await MessageModel.findById(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json(new MessageDto(message));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a message
router.put('/messages/:id', async (req, res) => {
  const { content } = req.body;
  try {
    const message = await MessageModel.update(req.params.id, content);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json(new MessageDto(message));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a message
router.delete('/messages/:id', async (req, res) => {
  try {
    const message = await MessageModel.delete(req.params.id);
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
