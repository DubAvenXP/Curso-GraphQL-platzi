const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: String,
    teacher: String,
    description: String,
    topic: String
})

const model = mongoose.model('courses', courseSchema);

module.exports = model;