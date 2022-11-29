import logo from "./logo.svg";
import "./App.css";
import { SearchBar } from "./SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Componente de React */}
        <SearchBar title={"Google Imágenes"} />
        {/* Se envían las props a través title */}


        {/* alt, src, className son atributos del ELEMENTO img */}
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

export default App;
