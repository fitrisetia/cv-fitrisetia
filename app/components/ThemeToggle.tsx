"use client";

import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        toggleTheme(event.target.value);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <select
                    value={theme}
                    onChange={handleThemeChange}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="dark-blue">Dark Blue</option> {/* Ganti dengan warna favoritmu */}
                </select>
            </div>
        </div>
    );
}
