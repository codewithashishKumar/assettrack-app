import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ activeSection, setActiveSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const sections = ["section1", "section2", "section3"];

    const handleClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);
    };

    const activeIndex = sections.indexOf(activeSection);

    return (
        <>
            <div className="mobile-header">
                <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <h2 className="mobile-title">Expense Tracker</h2>
            </div>

            <aside className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2 className="desktop-title">Expense Tracker</h2>

                <nav>
                    <ul className="nav-list">
                        <div
                            className="active-indicator"
                            style={{
                                transform: `translateY(${activeIndex * 58}px)`
                            }}
                        />

                        {sections.map((section, index) => (
                            <li
                                key={section}
                                className={activeSection === section ? "active" : ""}
                                onClick={() => handleClick(section)}
                            >
                                Section {index + 1}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default Sidebar;