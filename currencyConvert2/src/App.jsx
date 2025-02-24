import React, { useState } from "react";
import useCurrency from "./hooks/useCurrency";
import { InputBox } from "./Components";
import currency from "./hooks/currency";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertedCurrent = useCurrency(from, to);

  const handleCurrencyConversion = () => {
    if (!convertedCurrent) {
      console.log("Exchange rate data not available yet");
      return;
    }

    // Safely access exchange rate
    const exchangeRate = convertedCurrent?.quotes?.[`${from}${to}`];

    if (!exchangeRate) {
      console.log("Invalid currency pair or missing data");
      return;
    }

    setConvertedAmount(amount * exchangeRate);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Correct swap logic
    setConvertedAmount(amount); // Swap correctly
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://www.foodandwine.com/thmb/Ea5R6wPUirFp-R0Py2hSu9P3VCY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/best-pizza-in-america-razza-FT-BLOG0421-215011e44dfd455699ba3610391c9794.jpg')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCurrencyConversion();
          }}
        >
          <InputBox
             label="From" 
             amount={amount} 
             onAmountChange={setAmount}
             currency={from} 
             onCurrencyChange={setFrom}
             currencies={currency}
          />

          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To" 
            amount={convertedAmount} 
            currency={to} 
            onCurrencyChange={setTo}
            currencies={currency}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
