const mongoose = require('mongoose')
const Schema = mongoose.Schema

let taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    desctription: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: false
    },
    duedate: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

let Task = mongoose.model('Task', taskSchema)

module.exports = Task