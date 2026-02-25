import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Header */}
            <div className="mobile-header">
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <h2 className="mobile-title">Expense Tracker</h2>
            </div>

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2 className="desktop-title">Expense Tracker</h2>

                <nav>
                    <ul>
                        <li
                            className={activeSection === "section1" ? "active" : ""}
                            onClick={() => handleClick("section1")}
                        >
                            Section 1
                        </li>

                        <li
                            className={activeSection === "section2" ? "active" : ""}
                            onClick={() => handleClick("section2")}
                        >
                            Section 2
                        </li>

                        <li
                            className={activeSection === "section3" ? "active" : ""}
                            onClick={() => handleClick("section3")}
                        >
                            Section 3
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;