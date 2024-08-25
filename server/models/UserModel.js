const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    dob: { type: String, required: true },
    email: { type: String, required: true },
    roll_number: { type: String, required: true },
    user_id: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;