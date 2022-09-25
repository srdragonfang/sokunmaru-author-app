import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: String
    // nếu set timestamps: true thì sẽ từ động tạo 2 fields là createdAt UpdatedAt
}, {timestamps: true} )

export const ProjectModel = mongoose.model('ProjectModel', schema);