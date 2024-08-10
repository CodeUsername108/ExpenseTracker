import "../../styles/Dashboard.css"
import Chart from "../Chart/Chart"
import { useGlobalContext } from "../../context/globalContext"
import History from "../../History/History"
export const DashBoard = () => {
    const { totalIncome, totalExpense, transactionHistory, overallIncome, incomes, expenses } = useGlobalContext()
    return (
        <div className="dashboard">
            <h1>All transactions</h1>
            <div className="dashboard-area">
                <div className="chart-con">
                    <Chart />
                </div>
                <div className="stats-con">
                    <div className="totals">
                        <div>
                            Total Income = ${totalIncome()}
                        </div>
                        <div>
                            Total Expense = ${totalExpense()}
                        </div>
                        <div>
                            Overall Income = ${overallIncome()}
                        </div>
                        <History />
                    </div>
                </div>
            </div>
        </div>
    )
}