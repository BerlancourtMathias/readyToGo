import "./App.css";
import { useState } from "react";

const App = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="body">
      <header>⚛︎ Ready To Go</header>
      <div className="container">
        <div className="column1">
          <div className="switch1">
            <button
              onClick={() => {
                setSwitch1(true);
              }}
              className={switch1 ? "violetClass" : "whiteClass"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch1(false);
              }}
              className={switch1 ? "whiteClass" : "violetClass"}
            >
              OFF
            </button>
          </div>
          <div className="switch2">
            <button
              onClick={() => {
                setSwitch2(true);
              }}
              className={switch2 ? "violetClass" : "whiteClass"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch2(false);
              }}
              className={switch2 ? "whiteClass" : "violetClass"}
            >
              OFF
            </button>
          </div>
          <div className="switch3">
            <button
              onClick={() => {
                setSwitch3(true);
              }}
              className={switch3 ? "violetClass" : "whiteClass"}
            >
              ON
            </button>
            <button
              onClick={() => {
                setSwitch3(false);
              }}
              className={switch3 ? "whiteClass" : "violetClass"}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="column2">
          {/* <div className="displayStart"> */}
          {switch1 && switch2 && switch3 ? (
            <div className="displayStartGo">GO ! </div>
          ) : (
            <div className="displayStartNoway">NO WAY ! </div>
          )}
          {/* </div> */}
        </div>
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
