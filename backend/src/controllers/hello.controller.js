import { Router } from 'express';
import HelloDto from '../dto/hello.dto.js';
import HelloEntity from '../entities/hello.entity.js';

const router = Router();

router.get('/', (req, res) => {
  // Example usage of DTO and Entity
  const entity = new HelloEntity('World');
  const dto = new HelloDto(entity.message);
  res.json(dto);
});

export default router;
