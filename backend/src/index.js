import express from 'express';
import helloController from './controllers/hello.controller.js';
import chatController from './controllers/chat.controller.js';
import dotenv from 'dotenv';
import { ensureDatabaseAndTables } from './models/db.setup.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/api/chat', chatController);
const port = process.env.PORT || 3000;

// Ensure DB and tables exist
ensureDatabaseAndTables().then(() => {
  console.log('Database and tables ensured.');
  app.use('/api/hello', helloController);
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Failed to initialize database and tables:', err);
  process.exit(1);
});
