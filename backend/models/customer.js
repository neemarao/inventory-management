import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const customerSchema = new Schema({
    customerName: {type: String},
    customerEmail: {type: String},
    mobileNo: {type: String},
    address: {type: String},
    status: {type: String},
    action: {type: String}

}, {timestamps: true});

const customer = model('customer', customerSchema);

export default customer;
