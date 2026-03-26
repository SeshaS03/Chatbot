import { Router } from 'express';
import AgentModel from '../models/agent.model.js';

const router = Router();

// Get all agents
router.get('/', async (req, res) => {
  try {
    const agents = await AgentModel.findAll();
    res.json(agents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get agent by id
router.get('/:id', async (req, res) => {
  try {
    const agent = await AgentModel.findById(req.params.id);
    if (!agent) return res.status(404).json({ error: 'Agent not found' });
    res.json(agent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create agent
router.post('/', async (req, res) => {
  try {
    const agent = await AgentModel.create(req.body);
    res.status(201).json(agent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update agent
router.put('/:id', async (req, res) => {
  try {
    const agent = await AgentModel.update(req.params.id, req.body);
    if (!agent) return res.status(404).json({ error: 'Agent not found' });
    res.json(agent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete agent
router.delete('/:id', async (req, res) => {
  try {
    const agent = await AgentModel.delete(req.params.id);
    if (!agent) return res.status(404).json({ error: 'Agent not found' });
    res.json({ message: 'Agent deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
