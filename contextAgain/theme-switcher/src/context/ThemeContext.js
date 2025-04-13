import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    changeTheme : ()=> {}
});

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => useContext(ThemeContext)

