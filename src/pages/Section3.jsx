import "../styles/Section3.css";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function Section3({ expenses, budget }) {

    const totalSpent = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    );

    const remaining = budget - totalSpent;

    const progressPercentage = ((totalSpent / budget) * 100).toFixed(1);

    const data = [
        { name: "Spent", value: totalSpent },
        { name: "Remaining", value: remaining }
    ];

    const COLORS = ["#b6895b", "#e8d8c3"];

    return (
        <div className="section3-container">
            <div className="section3-card">

                <h1 className="section3-title">📊 Analytics Dashboard</h1>

                {/* Summary Cards */}
                <div className="summary-grid">

                    <div className="summary-box">
                        <p>Total Budget</p>
                        <h2>₹ {budget.toLocaleString()}</h2>
                    </div>

                    <div className="summary-box">
                        <p>Total Spent</p>
                        <h2>₹ {totalSpent.toLocaleString()}</h2>
                    </div>

                    <div className="summary-box">
                        <p>Remaining</p>
                        <h2 className={remaining < 0 ? "danger" : ""}>
                            ₹ {remaining.toLocaleString()}
                        </h2>
                    </div>

                </div>

                {/* Progress Bar */}
                <div className="progress-wrapper">
                    <div className="progress-label">
                        Budget Usage: {progressPercentage}%
                    </div>

                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                dataKey="value"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}

export default Section3;