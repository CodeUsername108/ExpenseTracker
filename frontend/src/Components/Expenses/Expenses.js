import "../../styles/Expenses.css"
import { useEffect } from "react"
import Form from "../Form/ExpenseForm"
import { useGlobalContext } from "../../context/globalContext"
import IncomeItem from "../IncomeItem/IncomeItem"

export const Expenses = () => {
    const { totalExpense, getExpense, deleteExpense, expenses } = useGlobalContext()
    useEffect(() => {
        getExpense()
    }, [])
    return (
        <div className="expenses">
            <h1>Expense</h1>
            <h2>Total Expense: ${totalExpense()}</h2>
            <div className="area">
                <Form />
                <div className="incomes-log">
                    {expenses.map((income) => {
                        const { _id, title, amount, type, description, date } = income
                        return <IncomeItem
                            key={_id}
                            id={_id}
                            title={title}
                            amount={amount}
                            type={type}
                            description={description}
                            date={date}
                            deleteItem={deleteExpense}
                        ></IncomeItem>
                    })}
                </div>
            </div>
        </div>
    )
}