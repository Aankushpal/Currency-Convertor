import React, { useEffect, useState } from 'react'
import InpotBox from './components/InpotBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

const App = () => {
  
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('inr') // we are setting the default currency to USD and use the setFromCurrency function to change the currency
  const [toCurrency, setToCurrency] = useState('usd') // we are setting the default currency to INR and use the setToCurrency function to change the currency
  const [covertedAmount, setCovertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setCovertedAmount(amount)
    setAmount(covertedAmount)
  }

  // const convert = () => { 
  //   setCovertedAmount((amount * currencyInfo[toCurrency])) // we are converting the amount to the selected currency by multiplying the amount with the currency rate
  // }

    useEffect(() => {
        setCovertedAmount((amount * currencyInfo[toCurrency])) // we are converting the amount to the selected currency by multiplying the amount with the currency rate
    }, [amount, currencyInfo])

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-end pr-80 items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg')`,
          backgroundSize: 'cover',
        }}
      >
        <div className="w-auto rounded-lg ">
          <div className="w-full max-w-md mx-auto border overflow-hidden border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-[#888]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InpotBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFromCurrency(currency)}
                  selectCurrency={fromCurrency}
                  onAmountChange={(value) => setAmount(value)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 text-white px-2 text-xl py-0.5"

                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InpotBox
                  label="To"
                  amount={covertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  selectCurrency={toCurrency}
                 
                />
              </div>

              {/* <button
              type="submit" 
              onClick={convert}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App