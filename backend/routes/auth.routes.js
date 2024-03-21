import express from 'express';
import { signup, login, renewToken } from '../controllers/auth.controller.js';
import { JWTvalidator } from '../middleware/jwt-validator.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/renew', JWTvalidator, renewToken);

export default router;
