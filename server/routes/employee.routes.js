import express from 'express';
import { createEmployee, deleteEmployeeById, getAllEmployees, getEmployeeById, updateEmployeeById } from '../controllers/employee.controller.js';

const router = express.Router();

router.get('/',getAllEmployees);
router.post('/', createEmployee);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);
export default router;  