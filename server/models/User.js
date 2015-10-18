var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
nickname: String,
birthday: Date,
gender: String,
country: String,
language: String,
hobbies: String,
description: String,
online: Boolean,
image_url: String,
location: String,
updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

