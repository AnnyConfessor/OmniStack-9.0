//cadastro

const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    cidades: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'User' 
    }
});

module.exports = mongoose.model('Spot', SpotSchema);