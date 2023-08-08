import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="screen"></div>
        <div className="keyboard">
          <button>AC</button>
          <button>DEL</button>
          <button>%</button>
          <button>/</button>

          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>

          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>

          <button className="big">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
