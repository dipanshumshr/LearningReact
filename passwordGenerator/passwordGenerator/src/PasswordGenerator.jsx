import { useState, useCallback , useEffect , useRef } from "react";

function PasswordGenerator() {

    const [password, setPassword] = useState("");
    const [numberUsed, setNumberUsed] = useState(false);
    const [characterUsed, setCharacterUsed] = useState(false);
    const [upperCaseUsed , setUpperCaseUsed ] = useState(false);
    const [lengthh, setlength] = useState(8);

    
    const passwordRef = useRef(password);

    const passWordCopy = useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])
    

    const passWordGenerate = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyz";
        let num = "0123456789"
        let chrc = ".,/[]{}\|:;"
        let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


        if(numberUsed) str += num;
        if(characterUsed) str += chrc;
        if(upperCaseUsed) str += upper;
        let lgth = str.length;

        for(let i = 0; i<lengthh; i++)
            {
            let randomCharacter = Math.floor(Math.random()* lgth + 1)
            pass += str.charAt(randomCharacter);
            } 
        setPassword(pass)


    }, [lengthh,numberUsed,characterUsed,upperCaseUsed,setPassword])

    useEffect( ()=> {passWordGenerate()}, [lengthh,numberUsed,characterUsed,upperCaseUsed])

    

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Password Generator</h1>
        
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            value={password}
            placeholder="Generator of Great Passwords"
            readOnly
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={passwordRef}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            onClick={passWordCopy}>
            Copy
          </button>
        </div>


        <div className="space-y-4">

          <div className="space-y-2">
            <label className="text-white flex justify-between">
              Password Length
              <span className="text-blue-400">{lengthh}</span>
            </label>
            <input
              type="range"
              min="4"
              max="20"
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              onChange={e=> setlength(e.target.value)}
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center space-x-3 text-white">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 rounded bg-gray-700 border-gray-600 focus:ring-blue-500"
                onChange={()=>{setNumberUsed(prev => !prev)}}
              />
              <span>Include Numbers</span>
            </label>

            <label className="flex items-center space-x-3 text-white">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 rounded bg-gray-700 border-gray-600 focus:ring-blue-500"
                onChange={()=>{setCharacterUsed(prev => !prev)}}
              />
              <span>Include Special Characters</span>
            </label>

            <label className="flex items-center space-x-3 text-white">
              <input
                type="checkbox"
                className="w-4 h-4 border-2 rounded bg-gray-700 border-gray-600 focus:ring-blue-500"
                onChange={()=>{setUpperCaseUsed(prev => !prev)}}
              />
              <span>Include Uppercase Letters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;