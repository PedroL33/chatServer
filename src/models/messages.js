import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    from: {type: String},
    to: {type: String},
    message: {type: String},
    time: {type: Number},
    read: {type: Boolean, default: false}
})

export const Message = mongoose.model('Message', MessageSchema);