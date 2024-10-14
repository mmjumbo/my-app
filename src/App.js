
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World yoyo</h1>
        <p>
          {" "}
          This project is <a href="https://github.com/mmjumbo/my-app">open-sourced on Github</a>{" "}
          
        </p>

        <Weather city="London" />
      </header>
    </div>
  );
}

export default App;
