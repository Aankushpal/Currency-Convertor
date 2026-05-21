import React, { useEffect, useState } from 'react'
import InpotBox from './components/InpotBox'
import Navbar from './components/Navbar'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import useTheme from './hooks/useTheme'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('inr')
  const [toCurrency, setToCurrency] = useState('usd')
  const [covertedAmount, setCovertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setCovertedAmount(amount)
    setAmount(covertedAmount)
  }

  useEffect(() => {
    setCovertedAmount(amount * (currencyInfo[toCurrency] ?? 0))
  }, [amount, currencyInfo, toCurrency])

  return (
    <div className="min-h-screen bg-surface-muted dark:bg-dark-bg text-txt-primary dark:text-dark-txt">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Full-screen converter section */}
      <main
        className="relative w-full min-h-screen flex items-center justify-center pt-14 px-4"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Currency converter"
      >
        {/* Overlay — lighter in light mode, deeper in dark mode */}
        <div
          className="absolute inset-0 bg-white/40 dark:bg-dark-bg/70"
          aria-hidden="true"
        />

        {/* Converter card */}
        <div className="relative z-10 w-full max-w-md">
          {/* Card header */}
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-bold text-txt-primary dark:text-dark-txt drop-shadow">
              Currency Converter
            </h1>
            <p className="text-sm text-txt-secondary dark:text-dark-muted mt-1">
              Real-time exchange rates
            </p>
          </div>

          {/* Card body */}
          <div
            className="
              rounded-2xl p-6
              bg-white/85 dark:bg-dark-card/90
              backdrop-blur-md
              border border-border-light dark:border-dark-border
              shadow-xl
            "
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              aria-label="Currency conversion form"
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

              {/* Swap button */}
              <div className="relative w-full h-0.5 my-3">
                <button
                  onClick={swap}
                  type="button"
                  aria-label="Swap currencies"
                  className="
                    absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                    rounded-full px-4 py-1 text-sm font-semibold
                    border-2 border-white dark:border-dark-border
                    bg-brand hover:bg-brand-hover
                    text-white
                    shadow-md
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
                    cursor-pointer
                  "
                >
                  ⇅ Swap
                </button>
              </div>

              <div className="w-full mt-1 mb-2">
                <InpotBox
                  label="To"
                  amount={covertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setToCurrency(currency)}
                  selectCurrency={toCurrency}
                />
              </div>

              {/* Result line */}
              {amount > 0 && covertedAmount > 0 && (
                <p className="text-center text-xs text-txt-secondary dark:text-dark-muted mt-3">
                  <span className="font-semibold text-txt-primary dark:text-dark-txt">
                    {amount.toLocaleString()} {fromCurrency.toUpperCase()}
                  </span>
                  {' = '}
                  <span className="font-semibold text-brand">
                    {covertedAmount.toFixed(4)} {toCurrency.toUpperCase()}
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
