import Income from '../models/IncomeModel.js'

export const addIncome = async (req, res) => {
    const {title, amount, type, description, date} = req.body
    const income = Income({
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
        await income.save()
        res.status(201).json({message: 'Income added successfully!'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getIncome = async (req, res) => {
    try {
        const incomes = await Income.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Error in Server: "+error})
    }
}

export const deleteIncome = async (req, res) => {
    const {id} = req.params
    Income.findByIdAndDelete(id)
     .then((income) => {
        res.json({message: "Income deleted successfully!"})
    })
    .catch((err) => {
        res.status(500).json({message: 'Error: '+err})
    })
}