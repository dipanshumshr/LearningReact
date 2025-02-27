import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context";
import ThemeBtn from "./components/Theme";
import Card from "./components/Cards";

function App() {
  const [mode, setMode] = useState("light");
  const changeMode = (value) => {
    if (value === "light") {
      setMode("light");
    } else if (value === "dark") {
      setMode("dark");
    }
  };

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("dark", "light");
    element.classList.add(mode);
  }, [mode]);

  return (
    <ThemeContextProvider value={{mode,changeMode}}>
       <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
