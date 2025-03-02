import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./component/Card";
import Themes from "./component/Themes";
function App() {
  const mode = useSelector(state => state.theme.mode);

  useEffect(()=> {
    const htmlElement = document.querySelector("html")
    htmlElement.classList.remove("dark","light")
    htmlElement.classList.add(mode)
  },[mode])

  return (
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themes/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
  )
}

export default App
