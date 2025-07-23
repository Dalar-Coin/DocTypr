const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        password: {
            type: String,
            required: [true, "Please enter your email"]
        },
        email: {
            type: String,
            required: false
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;