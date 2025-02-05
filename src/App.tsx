import React from 'react'
import { Link } from 'react-router-dom'
import Router from './routes'

const App = () => (
  <div className="App">
    <main>
      <p>App Works!</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Router />
    </main>
  </div>
)

export default App
