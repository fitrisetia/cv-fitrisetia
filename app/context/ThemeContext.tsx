"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>("light");

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        // Update CSS variables based on the selected theme
        if (newTheme === "dark") {
            document.documentElement.style.setProperty("--background", "#0a0a0a");
            document.documentElement.style.setProperty("--foreground", "#ededed");
        } else if (newTheme === "dark-blue") {
            document.documentElement.style.setProperty("--background", "#001f3f");
            document.documentElement.style.setProperty("--foreground", "#ffffff");
        } else {
            document.documentElement.style.setProperty("--background", "#ffffff");
            document.documentElement.style.setProperty("--foreground", "#171717");
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
