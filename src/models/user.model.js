import mongoose from "mongoose";
import { Sms } from "twilio/lib/twiml/VoiceResponse";

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    deviceToken:{
        webPush:[String],
        fcm:[String]
    },
    preferences:{
        email:{type:Boolean, default:true},
        Sms:{type:Boolean, default:true},
        push:{type:Boolean, default:true},
        inApp:{type:Boolean, default:true},
        whatsapp:{type:Boolean, default:true},
    }
})

const User = mongoose.model("User", userSchema)
export default User