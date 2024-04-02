import express from 'express';
import { getAllWidgets } from '../controllers/widgets';

const router = express.Router();

router.get('/widgets', (req, res) => {
  const allWidgets = getAllWidgets();
  res.json(allWidgets);
});


export default router;
