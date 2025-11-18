import React from 'react'

export default function SummaryCard({label, value, isCurrency}) {
  const display = isCurrency ? ('$' + Number(value).toFixed(2)) : (Number(value).toLocaleString())
  return (
    <div className="card p-3">
      <div className="card-body">
        <div className="summary-label">{label}</div>
        <div className="summary-value">{display}</div>
      </div>
    </div>
  )
}
