var mongoose = require('mongoose');

// See http://mongoosejs.com/docs/guide.html
var UserSchema = new mongoose.Schema({
    nickname: String,
    birthday: Date,
    gender: String,
    country: String,
    languages: Array,
    hobbies: Array,
    description: String,
    image_url: String,
    is_refugee: Boolean,
    mail: String,
    pass: String,
    updated_at: { type: Date, default: Date.now },
    // Online status and associated location of users should maybe reside
    // in a separate "transactional table".
    online: Boolean,
    location: Object, // JSON Object latitude, longitude
});

module.exports = mongoose.model('User', UserSchema);
