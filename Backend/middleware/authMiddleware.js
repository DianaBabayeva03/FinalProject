import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const userControlAuth = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');
     
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Unauthorized - invalid token' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized - token not found' });
  }
};

export { userControlAuth };




// middleware/authMiddleware.js

// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';
// import asyncHandler from 'express-async-handler';

// const userControlAuth = asyncHandler(async (req, res, next) => {
//   let token = req.cookies.jwt;

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       const user = await User.findById(decoded.userId).select('-password');

//       if (user && user.isVerified) {
//         req.user = user;
//         next();
//       } else {
//         res.status(401).json({ message: 'Unauthorized - email doğrulaması gerekiyor' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({ message: 'Unauthorized - geçersiz token' });
//     }
//   } else {
//     res.status(401).json({ message: 'Unauthorized - token bulunamadı' });
//   }
// });

// export { userControlAuth };