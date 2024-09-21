import React, { useId } from 'react'

function InpotBox({  
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,
    className = "",
}) {

    const amountInputId = useId() // we are using the useId hook to generate a unique id for the input field

  return (
    <>
          <div className={`p-2 overflow-hidden rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 border-t-2 border-l-2 border-b-2 border-white pl-2">
                <label  htmlFor= {amountInputId} className="text-gray-100 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}         
                    className="outline-none w-full bg-transparent py-1.5 text-gray-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // we checked if onAmountChange is passed then we call it with the new value and use Number function bcoz a event value(e.target.value) is always a string
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end pr-2 pb-2 text-right border-t-2 border-r-2 border-b-2 border-white">
                <p className="text-gray-100 mb-2 mt-1 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // we checked if onCurrencyChange is passed then we call it with the new value 
                >
                    
                    {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>

    </>
  )
}

export default InpotBox