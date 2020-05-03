const mongoose = require('mongoose');
const { Schema } = mongoose;
console.log(mongoose)

const requiredString = {
    type: String,
    required: true,
};

const requiredNumber = {
    type: Number,
    required: true,
};

// const defaultRequiredDate = {type: Date, default: Date.now,};

const logEntrySchema = new Schema({
title: requiredString,
description: String,
comments: String,
image: String,
rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
},
latitude: requiredNumber,
longitude: requiredNumber,
visitDate: {
    required: true,
    type: Date,
}
},{
    timestamps: true
});

module.exports = logEntrySchema;
