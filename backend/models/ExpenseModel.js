import mongoose from "mongoose";
const ExpenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 7,
        trim: true
    },
    type: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, { timestamps: true })
const Expense = mongoose.model("Expense", ExpenseSchema)
export default Expense