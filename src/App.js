import "./App.css";
import ToasterComponent from "./components/ToasterComponents";
import StoveComponent from "./components/StoveComponents";
import MainSwitchComponent from "./components/MainSwitchComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="">
          <ToasterComponent />
        </div>
       
        <div className="stove-section">
          <StoveComponent />
        </div>
      </header>
      <footer>
        <MainSwitchComponent />
      </footer>
    </div>
  );
}

export default App;
