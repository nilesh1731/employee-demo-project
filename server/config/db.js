import express from 'express';
import mongoose  from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI).then(()=>{
            console.log('MongoDB connected successfully')
        }).catch((err)=>{
            console.error('MongoDB connection error:', err);
        })
    }catch(err){
        console.error('Error connecting to MongoDB:',err);
    }
}