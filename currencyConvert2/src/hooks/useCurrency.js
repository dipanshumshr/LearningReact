import { useEffect, useState } from "react";

function useCurrency(fromCurrency, toCurrency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!fromCurrency || !toCurrency) return;

    const apiUrl = `http://apilayer.net/api/live?access_key=abaa7879b5ede16dc97ea07dfe6805c3&currencies=${toCurrency}&source=${fromCurrency}&format=1`;

    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((responseData) => {
        if (responseData.success) {
          setData(responseData);
        } else {
          console.error("Error fetching exchange rate");
        }
      })
      .catch((error) => console.error("API request failed:", error));
  }, [fromCurrency, toCurrency]);

  return data;
}

export default useCurrency;
