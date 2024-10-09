
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div>
        <div>
          <div>
            <form onSubmit={(e)=>{
              e.preventDefault();
              convert()
            }}>
              <div>
                <InputBox label="From" amount={amount} currencyOptions={options}
                onCurrencyChange={(currency)=>
                setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}/>
              </div>
              <div>
                <button type='button' onClick={swap}>Swap</button>
              </div>
              <div>
                <InputBox label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable/>
              </div>
              <button type='submit'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
