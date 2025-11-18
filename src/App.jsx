import React from 'react'
import Dashboard from './components/Dashboard'

export default function App(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">Mazer React</a>
        </div>
      </nav>
      <main className="container my-4">
        <Dashboard />
      </main>
      <footer className="text-center py-4">
        <small>Sample Mazer React Dashboard - Task 3</small>
      </footer>
    </div>
  )
}
