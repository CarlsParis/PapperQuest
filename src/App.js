import logo from './search.avif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Una Extension web sencilla para buscar articulos scientificos.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          PapperQuest
        </a>
      </header>
    </div>
  );
}

export default App;
