import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [inputVal, setInputVal] = useState(1);
  const [selectFrmCurrency, setSelectFrmCurrency] = useState('USD');
  const [selectToCurrency, setSelectToCurrency] = useState('EUR');
  const [output, setOutput] = useState(0);
  const [errorMsg, setErrorMsg] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    //const controller = new AbortController();

    const convertCurrencyUrl = async () => {
      if (!inputVal || typeof inputVal !== "number"){
        setInputVal('')
        return setOutput((amount) => amount);
      }
      
      try {
        setLoader(true);//before fetch happens we set it to true
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${inputVal}&from=${selectFrmCurrency}&to=${selectToCurrency}`);

        if (!res || !res.ok)
        throw new Error("Unable to fetch response");

        const data = await res.json();

        if(!data) 
        throw new Error(`Unable to fetch Data`);

        setOutput(data?.rates[selectToCurrency].toFixed(2));
        setLoader(false); //after fetch done we set it to false
      } catch (error) {
        console.log(error.message , 'error')
        setErrorMsg(error)
      }
    }

    if(selectFrmCurrency === selectToCurrency) return setOutput(inputVal);

    convertCurrencyUrl();

   /*  return () => {
      controller.abort();
    }; */

  }, [inputVal, selectFrmCurrency, selectToCurrency])

  return (
    <div className="App">
      <h1>Currency App</h1>
      {errorMsg && <p>This is : {errorMsg}</p>}
      <div>
        <input type="text" value={inputVal} onChange={(e) => setInputVal(() => Number(e.target.value))}/>
        <select value={selectFrmCurrency} onChange={(e) => setSelectFrmCurrency(() => e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={selectToCurrency} onChange={(e) => setSelectToCurrency(() => e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>{loader ? <span>Loading...</span> : <span>OUTPUT  -: convert from {selectFrmCurrency} to : {output} {selectToCurrency}</span>}</p>
      </div>
    </div>
  );
}

export default App;
