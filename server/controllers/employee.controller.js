import { Employee } from "../models/employee.models.js";
import { employeeValidationSchema } from "../schema/employee.validation.js";

// Get all employees with optional search
export const getAllEmployees = async(req, res)=>{
    try{
        const search = req.query.search || '';
        const query = {
            $or : [
                {fullName : {$regex: search, $options: 'i'}},
                {designation : {$regex:search , $options:'i'}}
            ]
        };

        const employees = await Employee.find(search ? query : {});
        res.status(200).json({
            message:'Employees fetched successfully',
            data:employees,
            success:true
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message:'Internal server error',
            success:false
        });
    }
}

// get all employees with pagination
export const getAllEmployeesWithPagination = async(req, res) => {
    try{
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        const employees = await Employee.find()
            .skip(skip)
            .limit(limit);
        const totalEmployees = await Employee.countDocuments();
        res.status(200).json({
            message: 'Employees fetched successfully',
            data: employees,
            success: true,
            total: totalEmployees,
            page: parseInt(page),
            totalPages: Math.ceil(totalEmployees / limit)
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}
// Create a new employee
export const createEmployee = async(req,res) => {
    try{
        const {error} = employeeValidationSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
                success: false
            });
        }

        const {fullName, email, designation, phone, employmentType} = req.body;
        const employee = new Employee({
            fullName,
            email,
            designation,
            phone,
            employmentType
        });
        await employee.save();
        res.status(201).json({
            message: 'Employee created successfully',
            data: employee,
            success: true
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        }); 
    }
}

// Get employee by ID
export const getEmployeeById = async(req, res) => {
    try{
        const {id} = req.params;
        const employee = await Employee.findById(id);
        if(!employee){
            return res.status(404).json({
                message: 'Employee not found',
                success: false
            });
        }
        res.status(200).json({
            message: 'Employee fetched successfully',
            data: employee,
            success: true
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}


// Update employee by ID
export const updateEmployeeById = async(req, res) => {  
    try{
        const {id} = req.params;
        const {error} = employeeValidationSchema.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
                success: false
            });
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedEmployee){
            return res.status(404).json({
                message: 'Employee not found',
                success: false
            });
        }
        res.status(200).json({
            message: 'Employee updated successfully',
            data: updatedEmployee,
            success: true
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

// Delete employee by ID
export const deleteEmployeeById = async(req, res) => {
    try{
        const {id} = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if(!deletedEmployee){
            return res.status(404).json({
                message: 'Employee not found',
                success: false
            });
        }
        res.status(200).json({
            message: 'Employee deleted successfully',
            data: deletedEmployee,
            success: true
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}   