const mongoose = require('mongoose');

const StudentSchema =  new mongoose.Schema({
    username: { type: String }, 
    class: String, 
    rollnumber: String
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = { Student };