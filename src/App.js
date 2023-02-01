import "./App.css";
import { useState } from "react";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div>
      <header>⚛︎ Ready To Go</header>
      <div className="container">
        <div className="column1">
          <div className="switch1">
            <button
              onClick={() => {
                setSwitch1(true);
              }}
            >
              ON
            </button>
            <button>OFF</button>
          </div>
          <div className="switch2"></div>
          <div className="switch3"></div>
        </div>
        <div className="column2"> </div>
      </div>
      <footer>
        Made with <span>&nbsp;React&nbsp;</span>
        at <span>&nbsp;Le Reacteur&nbsp;</span>
        by
        <span>&nbsp;Mathias&nbsp;</span>
      </footer>
    </div>
  );
};

export default App;
