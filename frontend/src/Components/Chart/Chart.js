import React from 'react'
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
}
    from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'
import '../../styles/Chart.css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)
const Chart = () => {
    const { incomes, expenses } = useGlobalContext()
    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc
            return dateFormat(date)
        }),
        datasets: [{
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const { amount } = income
                    return amount
                })
            ],
            backgroundColor: 'green',
            borderColor: '#80ff9a',
        },
        {
            label: 'Expense',
            data: [
                ...expenses.map((expense) => {
                    const { amount } = expense
                    return amount
                })
            ],
            backgroundColor: 'red',
            borderColor: '#ff8080',
        }]
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
                backgroundColor: 'rgba(0,0,0,0.8)', // Optionally adjust tooltip background color for better visibility
            },
        },
    };

    return (
        <div className='chart-div'>
            <Line data={data} options={options}/>
        </div>
    )
}

export default Chart
