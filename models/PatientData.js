const { Schema, model } = require('mongoose');

const patientDataSchema = new Schema({
    ipfsAddr: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: false
    },
    fileSize: {
        type: String,
        required: false
    },
    remuneration: {
        type: Number,
        required: true
    },
    dataTypes: {
        type: [],
        required: true
    },
    dataFormat: {
        type: String,
        required: true
    },
    patientNames: {
        type: String,
        required: false
    },
    patientLastNames: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});
module.exports = model('patientData', patientDataSchema);