import React, { useId } from 'react'

function InpotBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  className = '',
}) {
  const amountInputId = useId()

  return (
    <div
      className={`
        flex overflow-hidden rounded-xl
        border border-border-light dark:border-dark-border
        bg-surface dark:bg-dark-surface
        ${className}
      `}
    >
      {/* Amount side */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3 border-r border-border-light dark:border-dark-border">
        <label
          htmlFor={amountInputId}
          className="text-xs font-semibold uppercase tracking-wider text-txt-secondary dark:text-dark-muted mb-1 select-none"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={!onAmountChange}
          aria-label={`${label} amount`}
          className="
            w-full bg-transparent outline-none
            text-lg font-semibold
            text-txt-primary dark:text-dark-txt
            placeholder-txt-secondary/50 dark:placeholder-dark-muted/50
            disabled:cursor-not-allowed disabled:opacity-70
          "
        />
      </div>

      {/* Currency selector side */}
      <div className="flex flex-col justify-center items-end px-4 py-3 min-w-[110px]">
        <span className="text-xs font-semibold uppercase tracking-wider text-txt-secondary dark:text-dark-muted mb-1 select-none">
          Currency
        </span>
        <select
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          aria-label={`${label} currency`}
          className="
            rounded-lg px-2 py-1.5 text-sm font-medium
            bg-surface-muted dark:bg-dark-bg
            text-txt-primary dark:text-dark-txt
            border border-border-light dark:border-dark-border
            outline-none cursor-pointer
            focus-visible:ring-2 focus-visible:ring-brand
          "
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InpotBox
