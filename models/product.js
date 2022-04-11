import mongoose, { Schema, ObjectId } from "mongoose";
const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        minLength: 5,
    },
    slug: {
        type: String, 
        unique: true,
        index:true,
        lowercase: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
}, { timestamps: true});
productSchema.index({'$**': 'text'})
export default mongoose.model('Product', productSchema);