import express from 'express';
import { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } from "../controllers/customerController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/createcustomer", createCustomer);
router.get("/getAllcustomers", getAllCustomers);
router.get("/getcustomerById/:id", getCustomerById);
router.put("/updatecustomer/:id",  updateCustomer);
router.delete("/deletecustomer/:id", deleteCustomer);

export default router;