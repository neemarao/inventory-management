import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const discountSchema = new Schema({
    discountCode: {type: String},
    discountValue: {type: String},
    description: {type: String},
    validFrom: {type: String},
    validTo: {type: String},
    status: {type: String},
    action: {type: String}

}, {timestamps: true});

const discount = model('discount', discountSchema);

export default discount;