import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        requests: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: [],
            },
        ],
        contacts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: [],
            },
        ],
        profilePic: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
