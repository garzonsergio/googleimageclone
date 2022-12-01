import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { Header } from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar title={"Google Imágenes"} />
    </div>
  );
}

export default App;
