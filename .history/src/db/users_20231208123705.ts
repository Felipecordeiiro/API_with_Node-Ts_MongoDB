import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true },
    authentication: {
        password
    }
})