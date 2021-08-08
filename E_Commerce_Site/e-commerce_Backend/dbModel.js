import mongoose from 'mongoose';

const instance = mongoose.Schema({
    user:String,
    product:[],
    total:Number,
    payment:String,
});

export default mongoose.model("orders",instance);