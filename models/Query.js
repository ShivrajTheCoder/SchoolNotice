import mongoose from "mongoose";
const Schema = mongoose.Schema;

const querySchema = Schema({
    name: {
        type: String,
        required: true,
    },
    query: {
        type: String,
        required: true,
    }
})

const Quer = mongoose.model("Query", querySchema)
export default Quer;