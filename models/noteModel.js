import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
        },
        category: {
            type: String,
        }
    }, 
    {
        timestamps: true
    }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
