import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NoticeSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const Notice = mongoose.model("Notice", NoticeSchema);
export default Notice;