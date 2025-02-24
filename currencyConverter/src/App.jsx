import { InputBox } from "./components";
import { useState } from "react";
import useCurrency from "./hooks/useCurrency";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  const currencyInfo = useCurrency(from);

  const options = Object.keys(currencyInfo); 


  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedCurrency(amount);
    setAmount(convertedCurrency);
  }

  const handleCalculation = () => setConvertedCurrency(amount* currencyInfo[to])

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.foodandwine.com/thmb/B0W6yZo72cB6j9Jv_z7vqRwJKrM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-pizza-in-america-FT-BLOG0421-96f60f9d8f9545539c2abf37116892a0.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCalculation(); 
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" amount={amount} 
              currencyOptions={options} 
              onCurrencyChange={(convertedCurrency) => setAmount(amount)}
              setConvertedCurrency={from}
              onAmountChange = {(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
                amount={convertedCurrency} 
                currencyOptions={options} 
                onCurrencyChange={(currency) => setTo(currency)}
                setConvertedCurrency={from}
                amountDisabled = {true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
