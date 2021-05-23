import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Singleton } from './Singleton';
import example from './example.module.css';

function App() {
    const [count, setCount] = useState(0);

    const ins1 = new Singleton();
    const ins2 = new Singleton();
    const ins3 = new Singleton();
    var asdf = 'asdf';

    console.log('ins1 === ins2', ins1 === ins2);
    console.log('ins1 === ins3', ins1 === ins3);
    console.log(example);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React!</p>
                <p>
                    <button onClick={() => setCount((count) => count + 1)}>count is: {count}</button>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                    {' | '}
                    <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
}

export default App;
