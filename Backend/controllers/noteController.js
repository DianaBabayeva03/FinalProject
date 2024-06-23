import Note from '../models/noteModel'

const notePost = async (req, res) => {
  const { title, thumbnail, category } = req.body;

  try {
    const note = await Note.create({ title, thumbnail,category });
    res.status(201).json({ note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getNote = async (req, res) => {
  try {
    const allNotes = await NoteModel.find();
    res.json({ allNotes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getByIdNote = async (req, res) => {
  const { id } = req.params;
  try {
    const getById = await Note.findById(id);
    if (!getById) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ getById });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedData = await Note.findOneAndDelete({ _id: id });
    if (!deletedData) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json({ deletedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { notePost, getNote, getByIdNote, deleteById };

// import Note from '../models/noteModel.js';
// import { upload } from '../server.js';

// const notePost = async (req, res) => {
//   const { title, category } = req.body;
//   const thumbnail = req.file ? req.file.filename : null;

//   try {
//     const note = await Note.create({ title, thumbnail, category });
//     res.status(201).json({ note });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getNote = async (req, res) => {
//   try {
//     const { category } = req.query;
//     const filter = category ? { category } : {};
//     const allNotes = await Note.find(filter);
//     res.json({ allNotes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const getByIdNote = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const getById = await Note.findById(id);
//     if (!getById) {
//       return res.status(404).json({ error: "Note not found" });
//     }
//     res.json({ getById });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedData = await Note.findOneAndDelete({ _id: id });
//     if (!deletedData) {
//       return res.status(404).json({ error: "Note not found" });
//     }
//     res.json({ deletedData });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// export { notePost, getNote, getByIdNote, deleteById };
