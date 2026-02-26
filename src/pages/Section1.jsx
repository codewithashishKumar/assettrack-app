import { useState } from "react";
import "../styles/Section1.css";
import CustomDatePicker from "./CustomDatePicker";

function Section1({ expenses, setExpenses, budget }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const totalSpent = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    const remaining = budget - totalSpent;

    const handleAddExpense = (e) => {
        e.preventDefault();

        const numericAmount = Number(amount);

        if (!title.trim() || !numericAmount || !date) return;

        if (numericAmount > remaining) {
            alert("Not enough remaining budget!");
            return;
        }

        const newExpense = {
            id: Date.now(),
            title,
            amount: numericAmount,
            date,
        };

        setExpenses([...expenses, newExpense]);

        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <div className="section1-container">
            <div className="section1-card">
                <h1 className="section1-title">💸 Add Expense</h1>

                {/* Budget Summary */}
                <div className="budget-summary">
                    <div>
                        <p>Total Budget</p>
                        <h3>₹ {budget.toLocaleString()}</h3>
                    </div>

                    <div>
                        <p>Remaining</p>
                        <h3 className={remaining < 0 ? "danger" : ""}>
                            ₹ {remaining.toLocaleString()}
                        </h3>
                    </div>
                </div>

                {/* Expense Form */}
                <form className="modern-form" onSubmit={handleAddExpense}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            placeholder=" "
                        />
                        <label>Expense Title</label>
                    </div>

                    <div className="input-group">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            placeholder=" "
                        />
                        <label>Amount</label>
                    </div>

                    <CustomDatePicker
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                    />

                    <button type="submit" className="gradient-btn">
                        Add Expense
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Section1;