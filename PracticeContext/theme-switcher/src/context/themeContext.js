import { createContext, useContext } from "react";

const themeContext = createContext({
    mode : "light",
    changeMode : () => {}
})

export const ThemeContextProvider = themeContext.Provider

export const useTheme = () => {
    return useContext(themeContext);
}