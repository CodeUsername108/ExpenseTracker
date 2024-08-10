import React from "react";
import { dateFormat } from "../../utils/dateFormat"
import "../../styles/IncomeItem.css"

function IncomeItem({ id, title, amount, type, description, date, deleteItem }) {
    console.log('type', type)
    return (
        <div className="incomeitem">
            <div className="content">
                <h1>
                    {title}
                    <button onClick={() => deleteItem(id)}>
                        Delete
                    </button>
                </h1>
                <div className="body">
                    <p>${amount}</p>
                    <p>{type}</p>
                    <p>{description}</p>
                    <p>{dateFormat(date)}</p>
                </div>
            </div>
        </div>
    )
}
export default IncomeItem