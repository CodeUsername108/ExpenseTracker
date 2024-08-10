import React, { useContext, useState } from "react"
import axios from "axios"

const GlobalContext = React.createContext()
const BASE_URL = "http://localhost:5000/api/v1/"

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([])

    //handling incomes
    
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.error)
            })
        getIncome()
    }
    const getIncome = async () => {
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
        console.log(response.data)
    }
    const deleteIncome = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncome()
    }
    const totalIncome = () => {
        let totalIncome = 0
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome
    }

    //handling expenses

    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.data.response.error)
            })
        getExpense()
    }
    const getExpense = async () => {
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(response.data)
        console.log(response.data)
    }
    const deleteExpense = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpense()
    }
    const totalExpense = () => {
        let totalExpense = 0
        expenses.forEach((expense) => {
            totalExpense += expense.amount
        })
        return totalExpense
    }

    //controlling overall

    const overallIncome = () => {
        return totalIncome()-totalExpense()
    }
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt) 
        })
        return history.slice(0,3)
    }

    return (
        <GlobalContext.Provider value={{
            addIncome, getIncome, deleteIncome, incomes, totalIncome, 
            addExpense, getExpense, deleteExpense, expenses, totalExpense,
            error, setError, overallIncome, transactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}