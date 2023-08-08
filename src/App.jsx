import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const clear = () => {
    setValue("");
  };

  const del = () => {
    setValue(value.slice(0, -1));
  };

  const equal = () => {
    try {
      const result = eval(value);
      setValue(result);
    } catch (error) {
      setValue('Error: Invalid expression');
    }
  };  

  return (
    <div className="container">
      <div className="screen">
        <input type="text" value={value} readOnly />
      </div>

      <div className="keyboard">
        <button className="big" onClick={clear} value="AC">
          AC
        </button>
        <button onClick={del} value="DEL">
          DEL
        </button>
        <button onClick={handleClick} value="/">
          /
        </button>

        <button onClick={handleClick} value="7">
          7
        </button>
        <button onClick={handleClick} value="8">
          8
        </button>
        <button onClick={handleClick} value="9">
          9
        </button>
        <button onClick={handleClick} value="*">
          *
        </button>

        <button onClick={handleClick} value="4">
          4
        </button>
        <button onClick={handleClick} value="5">
          5
        </button>
        <button onClick={handleClick} value="6">
          6
        </button>
        <button onClick={handleClick} value="-">
          -
        </button>

        <button onClick={handleClick} value="1">
          1
        </button>
        <button onClick={handleClick} value="2">
          2
        </button>
        <button onClick={handleClick} value="3">
          3
        </button>
        <button onClick={handleClick} value="+">
          +
        </button>

        <button onClick={handleClick} value="0" className="big">
          0
        </button>
        <button onClick={handleClick} value=".">
          .
        </button>
        <button onClick={equal} value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
