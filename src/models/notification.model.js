import { Timestamp } from "firebase-admin/firestore";
import mongoose, { mongo } from "mongoose";
const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'info'
    },
    priority: {
        type: String,
        default: 'medium'
    },
    channels: [String],
    userId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    sheduledAt: { type: Date },

}, {timestamps:true})

const Notification = mongoose.model("User", notificationSchema)
export default Notification