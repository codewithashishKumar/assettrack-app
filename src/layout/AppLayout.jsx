import Sidebar from "./Sidebar";
import "../styles/AppLayout.css";

import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Section3 from "../pages/Section3";

function AppLayout({
    activeSection,
    setActiveSection,
    expenses,
    setExpenses,
    budget
}) {
    const renderSection = () => {
        switch (activeSection) {
            case "section1":
                return (
                    <Section1
                        expenses={expenses}
                        setExpenses={setExpenses}
                        budget={budget}
                    />
                );

            case "section2":
                return (
                    <Section2
                        expenses={expenses}
                        setExpenses={setExpenses}
                    />
                );

            case "section3":
                return (
                    <Section3
                        expenses={expenses}
                        budget={budget}
                    />
                );

            default:
                return (
                    <Section1
                        expenses={expenses}
                        setExpenses={setExpenses}
                        budget={budget}
                    />
                );
        }
    };

    return (
        <div className="layout">
            <Sidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main className="main-content">
                {renderSection()}
            </main>
        </div>
    );
}

export default AppLayout;