import React from 'react'

export default function Alerts({alerts}) {
  return (
    <div className="card">
      <div className="card-header">System Alerts</div>
      <div className="card-body">
        <div className="alerts-list">
          {alerts.map((a,i) => {
            const cls = a.type === 'warning' ? 'alert-warning' : 'alert-info'
            const time = new Date(a.time).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})
            return (
              <div className={'alert ' + cls} role="alert" key={i}>
                <strong>{a.type.charAt(0).toUpperCase() + a.type.slice(1)}:</strong> {a.message} <br />
                <small>{time}</small>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
