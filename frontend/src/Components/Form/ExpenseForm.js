import { useState } from "react";
import React from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from "../../context/globalContext";
import "../../styles/Form.css"

function Form() {
    const {addExpense, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({})
    const { title, amount, type, description, date } = inputState
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }
    const handleSubmit = e => {
        e.preventDefault()
        addExpense(inputState)
        setInputState({

        })
    }
    return (
        <div className="form-container" onSubmit={handleSubmit}>
            <form className="form">
                <div>
                    <input type="text"
                        placeholder="Title"
                        value={title}
                        name = {'title'}
                        onChange={handleInput('title')} />
                    <input type="number"
                        placeholder="Amount"
                        value={amount}
                        name = {'amount'}
                        onChange={handleInput('amount')} />
                    <input type="text"
                        placeholder="Type of payment"
                        value={type}
                        name = {'type'}
                        onChange={handleInput('type')} />
                    <input type="text"
                        placeholder="Description"
                        value={description}
                        name = {'description'}
                        onChange={handleInput('description')} />
                </div>
                <div className="input-control">
                    <DatePicker
                        id='date'
                        placeholderText="Enter a date"
                        selected={date}
                        dateFormat='dd/MM/yyyy'
                        onChange={date => setInputState({ ...inputState, date })}
                    />
                </div>
                <button type="sumbit">
                    Submit
                </button>
            </form>
        </div>
    )
}
export default Form