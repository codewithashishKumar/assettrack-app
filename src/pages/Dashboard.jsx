function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Scrollable content here...</p>

            {/* Fake long content for testing scroll */}
            {[...Array(30)].map((_, i) => (
                <p key={i}>Item {i + 1}</p>
            ))}
        </div>
    );
}

export default Dashboard;