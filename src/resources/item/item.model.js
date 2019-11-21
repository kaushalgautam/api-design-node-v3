import mongoose, { mongo } from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'complete', 'pastdue'],
        required: true
    },
    notes: String,
    due: Date,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    list: {
        ref: 'list',
        required: true,
        type: mongoose.Schema.Types.ObjectId
    }

}, { timestamps: true })
export const Item = mongoose.model('item', itemSchema)
