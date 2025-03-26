import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const suppliersSchema = new Schema({
    serialno: {type: String},
    suppliersName: {type: String},
    email: {type: String},
    mobileNumber: {type: String},
    address: {type: String},
    status: {type: String}

}, {timestamps: true});

const suppliers = model('suppliers', suppliersSchema);

export default suppliers;