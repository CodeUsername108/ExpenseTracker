import { useEffect } from "react"
import { useGlobalContext } from "../../context/globalContext"
import "../../styles/Incomes.css"
import Form from "../Form/IncomeForm"
import IncomeItem from "../IncomeItem/IncomeItem"

export const Incomes = () => {
    const { incomes, deleteIncome, totalIncome, getIncome } = useGlobalContext()
    useEffect(() => {
        getIncome()
    }, [])
    return (
        <div className="incomes">
            <h1>Incomes</h1>
            <h2>Total Income: ${totalIncome()}</h2>
            <div className="area">
                <Form />
                <div className="incomes-log">
                    {incomes.map((income) => {
                        const { _id, title, amount, type, description, date } = income
                        return <IncomeItem
                            key={_id}
                            id={_id}
                            title={title}
                            amount={amount}
                            type={type}
                            description={description}
                            date={date}
                            deleteItem={deleteIncome}
                        ></IncomeItem>
                    })}
                </div>
            </div>
        </div>
    )
}