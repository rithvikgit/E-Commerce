import mongoose from 'mongoose';

const instance2 = mongoose.Schema({
    email_id:String,
    password:String,
    order:String,
});

export default mongoose.model("users",instance2);