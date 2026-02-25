import { useState } from "react";
import AppLayout from "./layout/AppLayout";
import "../src/styles/global.css";

function App() {
  const [activeSection, setActiveSection] = useState("section1");

  return (
    <AppLayout
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    />
  );
}

export default App;