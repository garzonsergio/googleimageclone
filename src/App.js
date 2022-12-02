import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

// API Key Pexels
// 563492ad6f91700001000001feb193d28b3846d69d14fca34d49387a
//www.pexels.com/es-es/api/documentation/?

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
