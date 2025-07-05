import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import employeeRoutes from './routes/employee.routes.js';

dotenv.config();
// data base connection
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());  // It will allow all origins by default
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({extended:true}));  // It is used to deal with form data

// Routes
app.use('/api/v1/employees', employeeRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

// Global error handler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({
        message: 'Internal server error',
        error : err.message
    })
})