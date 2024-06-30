import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  updateUserProfile,
  getUserProfile,
  getAllUsers,
  deleteUsers,
  // getUsers,
} from '../controllers/userController.js';
import { userControlAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router
  .route('/profile')
  .get(userControlAuth, getUserProfile)
  .put(userControlAuth, updateUserProfile);


  // smart custom
  router.get('/api/customs-declarations', (req, res) => {
    const declarations = [
      { id: 1, customerName: 'Ali', surname: 'Yusifov', phone: '0501234567', tracking: 'TRK123', declared: true },
      { id: 2, customerName: 'Aygun', surname: 'Mammadova', phone: '0509876543', tracking: 'TRK456', declared: false },
    ];
    res.json(declarations);
  });
  router.delete("/all/:id", userControlAuth, deleteUsers )
  router.get('/all', userControlAuth, getAllUsers);
  // router.get('/users', userControlAuth, getUsers);

export default router;