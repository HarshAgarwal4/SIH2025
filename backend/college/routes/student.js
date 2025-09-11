import express from 'express';
import { registerStudent } from '../controllers/student.js';
let studentRouter = express.Router();

studentRouter.post('/student/register' , registerStudent);

export default studentRouter;