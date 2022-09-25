import express from 'express';
import { getProjects, createProject, updateProject } from '../controllers/projects.js';

const router = express.Router();

// http://localhost:PORT/projects
router.get('/', getProjects);

router.post('/', createProject);

router.post('/update', updateProject);

export default router;
