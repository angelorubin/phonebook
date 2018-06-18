const mongoose = require('mongoose')

const moment = require('moment')

const UsersSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthdate: {
        type : Date,
        required: true
    },
    created_at: {
        type : Date,
        default: Date.now
    },
})

const Users = mongoose.model('Users', UsersSchema)

module.exports = Users