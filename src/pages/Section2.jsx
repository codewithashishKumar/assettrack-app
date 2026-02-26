import "../styles/Section2.css";

function Section2({ expenses, setExpenses }) {
    const handleDelete = (id) => {
        const filteredExpenses = expenses.filter((item) => item.id !== id);
        setExpenses(filteredExpenses);
    };

    const totalSpent = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    return (
        <div className="section2-container">
            <div className="section2-card">
                <div className="section2Header">
                    <h1 className="section2-title">Expense Overview</h1>
                </div>


                {expenses.length === 0 ? (
                    <div className="empty-state">
                        No expenses added yet.
                    </div>
                ) : (
                    <>
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense) => (
                                    <tr key={expense.id}>
                                        <td>{expense.title}</td>
                                        <td>₹ {expense.amount}</td>
                                        <td>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(expense.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="total-box">
                            Total Spent: ₹ {totalSpent}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Section2;