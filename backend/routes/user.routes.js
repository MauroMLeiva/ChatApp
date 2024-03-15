import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import {
    acceptRequest,
    getRequests,
    getUsersForSidebar,
    rejectRequest,
    sendContactRequest,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsersForSidebar);
router.get('/requests', protectRoute, getRequests);
router.post('/add/:username', protectRoute, sendContactRequest);
router.post('/accept/:id', protectRoute, acceptRequest);
router.post('/reject/:id', protectRoute, rejectRequest);

export default router;
