import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/ThemeContext"
import Cards from "./component/Cards";
import ToggleButton from "./component/ToggleButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const changeTheme = (mode) => {
    setThemeMode(mode)
  }

  useEffect(()=>{
      
    const htmlElement = document.querySelector('html')

    htmlElement.classList.remove("light", "dark")

    htmlElement.classList.add(themeMode)

  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, changeTheme}}>
      <ToggleButton/>
      <Cards/>
    </ThemeProvider>
  )
}

export default App
