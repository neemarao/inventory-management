import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const productSchema = new Schema({
    productName: {type: String},
    sku: {type: String},
    productDescription: {type: String},
    category: {type: String},
    costPrice: {type: String},
    selligPrice: {type: String},
    quantity: {type: String},
    status: {type: String},
    action: {type: String}

}, {timestamps: true});

const Product = model('Product', productSchema);

export default Product;