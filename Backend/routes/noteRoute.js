import express from 'express'
import { deleteById, getByIdNote, getNote, notePost } from '../controllers/noteController.js'

const noteRoutes = express.Router()


router.get('/', getNote)

router.post('/post', notePost)

router.get('/:id', getByIdNote)

router.delete('/:id',deleteById)

router.patch('/:id', (req, res) => {
    //req.params.id
    res.json({msg: 'update metod'})
})

export default noteRoutes


// import express from 'express';
// import { deleteById, getByIdNote, getNote, notePost } from '../controllers/noteController.js';
// import { upload } from '../server.js';

// const noteRoutes = express.Router();

// noteRoutes.get('/', getNote);

// noteRoutes.post('/post', upload.single('thumbnail'), notePost);

// noteRoutes.get('/:id', getByIdNote);

// noteRoutes.delete('/:id', deleteById);

// noteRoutes.patch('/:id', (req, res) => {
//     // req.params.id
//     res.json({ msg: 'update metod' });
// });

// export default noteRoutes;

