import Customer from "../models/customer.js";

export const createCustomer = async (req, res) => {
    try {
        const { serialNo, customerName, customerEmail, customerMobileno, customerAddress, status } = req.body;
        if( serialNo || !customerName || !customerEmail || !customerMobileno || !customerAddress || !status) {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }
        await Customer.create({serialNo, customerName, customerEmail, customerMoblieno, customerAddress, status})
        res.status(201).json({
            message: 'Customer created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Customer', details: error.message });
    }
};

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'customer id not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const {  serialNo, customerName, customerEmail, customerMoblieno, customerAddress, status } = req.body;
        const customerId = req.params.id; 

        const existingCustomer = await Customer.findById(customerId);
        if (!existingCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const updateData = {
             serialNo, customerName, customerEmail, customerMoblieno, customerAddress, status
        };

        const updatedcustomer = await Customer.findByIdAndUpdate(
            customerId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Customer updated successfully',
            customer: updatedcustomer
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the branch', details: error.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const customerId = req.params.id; 
        const deletedCustomer = await Customer.findByIdAndDelete(customerId); 
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};