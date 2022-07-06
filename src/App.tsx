import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Router from './routes';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const handleChangeCount = () => setCount((_count) => _count + 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={handleChangeCount}>count is: {count}</Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <main>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Router />
      </main>
    </div>
  );
};

export default App;
