import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <body className="App-body">
        <h1>Soapy Snake</h1>
        <h4>DFK Tutorial Samples</h4>
        <div className="linksView">
          <Button text="Web3 Test" url="https://web3test.soapysnake.com" />
          <Button
            text="MetaMask Connection"
            url="https://web3test.soapysnake.com"
            disabled={true}
          />
          <Button
            text="Phaser Test"
            url="https://web3test.soapysnake.com"
            disabled={true}
          />
        </div>
      </body>
    </div>
  );
}

export default App;
