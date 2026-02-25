import Sidebar from "./Sidebar";
import "../styles/AppLayout.css";

import Section1 from "../pages/Section1";
import Section2 from "../pages/Section2";
import Section3 from "../pages/Section3";

function AppLayout({ activeSection, setActiveSection }) {
    const renderSection = () => {
        switch (activeSection) {
            case "section1":
                return <Section1 />;
            case "section2":
                return <Section2 />;
            case "section3":
                return <Section3 />;
            default:
                return <Section1 />;
        }
    };

    return (
        <div className="layout">
            <Sidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main className="main-content">{renderSection()}</main>
        </div>
    );
}

export default AppLayout;