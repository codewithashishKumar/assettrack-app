import { useState } from "react";
import AppLayout from "./layout/AppLayout";
import "../src/styles/global.css";

function App() {
  const [activeSection, setActiveSection] = useState("section1");
  const [expenses, setExpenses] = useState([]);
  const [budget] = useState(100000); // Fixed total budget

  return (
    <AppLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      expenses={expenses}
      setExpenses={setExpenses}
      budget={budget}
    />
  );
}

export default App;