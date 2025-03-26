import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const financeSchema = new Schema({
    name: {type: String},
    amount: {type: String},
    transactiontype: {type: String},
    category: {type: String},
    paymentMode: {type: String},
    status: {type: String},
    action: {type: String}

}, {timestamps: true});

const finance = model('finance', financeSchema);

export default finance;