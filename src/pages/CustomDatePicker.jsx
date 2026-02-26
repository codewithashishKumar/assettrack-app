import { useState, useEffect, useRef } from "react";
import "../styles/CustomDatePicker.css";

function CustomDatePicker({ value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const pickerRef = useRef(null);

    // Close when clicked outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const handleDateSelect = (day) => {
        const selected = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        );

        const formatted = selected.toISOString().split("T")[0];
        onChange(formatted);
        setIsOpen(false);
    };

    const changeMonth = (direction) => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + direction,
                1
            )
        );
    };

    return (
        <div className="custom-date-picker" ref={pickerRef}>
            <input
                type="text"
                value={value}
                readOnly
                placeholder="Select Date"
                onClick={() => setIsOpen(!isOpen)}
            />

            {isOpen && (
                <div className="calendar-popup">
                    <div className="calendar-header">
                        <button onClick={() => changeMonth(-1)}>‹</button>
                        <span>
                            {currentDate.toLocaleString("default", {
                                month: "long",
                            })}{" "}
                            {currentDate.getFullYear()}
                        </span>
                        <button onClick={() => changeMonth(1)}>›</button>
                    </div>

                    <div className="calendar-grid">
                        {[...Array(daysInMonth)].map((_, i) => (
                            <div
                                key={i}
                                className="calendar-day"
                                onClick={() => handleDateSelect(i + 1)}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomDatePicker;