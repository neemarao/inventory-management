import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const bannerSchema = new Schema({
    bannerName: {type: String},
    bannerDescription: {type: String},
    bannerImage: {type: String},
    validFrom: {type: String},
    validTo: {type: String},
    status: {type: String},
    action: {type: String}

}, {timestamps: true});

const banner = model('banner', bannerSchema);

export default banner;