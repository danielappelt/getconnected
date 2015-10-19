var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
nickname: String,
birthday: Date,
gender: String,
country: String,
languages: Array,
hobbies: Array,
description: String,
online: Boolean,
image_url: String,
is_refugee: Boolean,
// Online status and associated location of users should maybe reside
// in a separate "transactional table".
online: Boolean,
location: String, // JSON Object latitude, longitude
mail: String,
pass: String,
updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

