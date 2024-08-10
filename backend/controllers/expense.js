import Expense from "../models/ExpenseModel.js";
export const addExpense = async (req, res) => {
    const {title, amount, type, description, date} = req.body
    const expense = Expense({
        title,
        amount,
        type,
        description,
        date
    })
    try {
        if(!title || !amount || !type || !description || !date){
            return res.status(400).json({message: 'Please fill all the fields!'})
        }
        if (amount<0){
            return res.status(400).json({message: 'Amount must be greater than 0!'})
        }
        await expense.save()
        res.status(201).json({message: 'Expense added successfully!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: "Error in Server: "+error})
    }
}

export const deleteExpense = async (req, res) => {
    const {id} = req.params
    Expense.findByIdAndDelete(id)
     .then((expense) => {
        res.json({message: "Income deleted successfully!"})
    })
    .catch((err) => {
        res.status(500).json({message: 'Error: '+err})
    })
}