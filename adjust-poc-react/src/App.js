import Adjust from '@adjustcom/adjust-web-sdk';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            console.log('Tracking "Purchase" button event');
            Adjust.trackEvent({
              eventToken: 'rvmhfq',
            });
          }}
        >
          Purchase
        </button>
      </header>
    </div>
  );
}

export default App;
