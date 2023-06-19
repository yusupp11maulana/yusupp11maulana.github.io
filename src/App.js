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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Maintenance() {
  return (
    <>
      <div className="container">
        <div className="text-center">
          <lottie-player className="text-center mb-5 img-fluid" src="https://assets8.lottiefiles.com/private_files/lf30_y9czxcb9.json" background="transparent" speed="1" loop="" autoplay="">
          </lottie-player>
        </div>
      </div>
    </>
  );
}

export default Maintenance;
