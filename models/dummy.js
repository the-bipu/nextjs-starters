import mongoose from 'mongoose';

const dummySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: '',
    },
    email: {
        type: String,
        required: true,
        default: '',
    },
    content: {
        type: String,
        required: true,
        default: '',
    },
}, {
    timestamps: true,
});

export const dummy = mongoose.models.dummy || mongoose.model('dummy', dummySchema);

