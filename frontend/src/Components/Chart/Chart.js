import React from 'react'
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import '../../styles/Chart.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const Chart = () => {
    const { incomes, expenses } = useGlobalContext()

    // Combine incomes and expenses with dates
    const combinedData = [
        ...incomes.map((income) => ({ ...income, type: 'income' })),
        ...expenses.map((expense) => ({ ...expense, type: 'expense' }))
    ]

    // Sort the combined data by date
    combinedData.sort((a, b) => new Date(a.date) - new Date(b.date))

    // Separate sorted data into labels and datasets
    const sortedLabels = combinedData.map((entry) => dateFormat(entry.date))
    const incomeData = combinedData
        .filter((entry) => entry.type === 'income')
        .map((entry) => entry.amount)
    const expenseData = combinedData
        .filter((entry) => entry.type === 'expense')
        .map((entry) => entry.amount)

    const data = {
        labels: sortedLabels,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                backgroundColor: 'green',
                borderColor: '#80ff9a',
            },
            {
                label: 'Expense',
                data: expenseData,
                backgroundColor: 'red',
                borderColor: '#ff8080',
            }
        ]
    }

    const options = {
        scales: {
            x: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
            },
            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                },
            },
            tooltip: {
                bodyColor: 'white',
                titleColor: 'white',
                backgroundColor: 'rgba(0,0,0,0.8)',
            },
        },
    }

    return (
        <div className='chart-div'>
            <Line data={data} options={options} />
        </div>
    )
}

export default Chart
