import "./App.css";
const startingCX = 10;
const startingCY = 10;
const whiteWidth = 24;
const blackWidth = 15;
const whiteHeight = 140;
const blackHeight = 90;
const cRightShoulder = 9;
const dLeftShoulder = 6;
const dRightShoulder = 7;
const eLeftShoulder = 8;
const fRightShoulder = 9;
const gLeftShoulder = 8;
const gRightShoulder = 7;
const aLeftShoulder = 8;
const aRightShoulder = 7;
const bLeftShoulder = 8;
const smallWhiteWidth = whiteWidth - cRightShoulder;

function evalMath(num1, opp, num2) {
  let mathResult;
  switch (opp) {
    case "+":
      mathResult = Number(num1) + Number(num2);
      break;
    case "-":
      mathResult = Number(num1) - Number(num2);
      break;
    case "*":
      mathResult = Number(num1) * Number(num2);
      break;
    case "/":
      mathResult = Number(num1) / Number(num2);
      break;
    default:
      break;
  }
  return mathResult.toString();
}
const keyPath1 = "M".concat(
  startingCX,
  " ",
  startingCY,
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", whiteWidth),
  " V ",
  blackHeight,
  " H ",
  evalMath(evalMath(startingCX, "+", whiteWidth), "-", cRightShoulder),
  " V ",
  startingCY,
  " L ",
  startingCX,
  " ",
  startingCY
);
const keyPath2 = "M".concat(
  evalMath(startingCX, "+", smallWhiteWidth),
  " ",
  startingCY,
  " H ",
  evalMath(evalMath(startingCX, "+", blackWidth), "+", smallWhiteWidth),
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", smallWhiteWidth),
  " L ",
  evalMath(startingCX, "+", smallWhiteWidth),
  " ",
  startingCY
);
const keyPath3 = "M".concat(
  evalMath(evalMath(startingCX, "+", whiteWidth), "+", dLeftShoulder),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", whiteWidth),
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "-",
    dRightShoulder
  ),
  " V ",
  startingCY,
  " L ",
  evalMath(evalMath(startingCX, "+", whiteWidth), "+", dLeftShoulder),
  " ",
  startingCY
);
const keyPath4 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "-",
    dRightShoulder
  ),
  " ",
  startingCY,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "+",
    eLeftShoulder
  ),
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "-",
    dRightShoulder
  ),
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "-",
    dRightShoulder
  ),
  " ",
  startingCY
);
const keyPath5 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "+",
    eLeftShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 3)),
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 2)),
    "+",
    eLeftShoulder
  ),
  " ",
  startingCY
);
const keyPath6 = "M".concat(
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 3)),
  " ",
  startingCY,
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "-",
    fRightShoulder
  ),
  " V ",
  startingCY,
  " L ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 3)),
  " ",
  startingCY
);
const keyPath7 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "-",
    fRightShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "+",
    gLeftShoulder
  ),
  " V ",
  blackHeight,
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "-",
    fRightShoulder
  ),
  " ",
  startingCY
);
const keyPath8 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "+",
    gLeftShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "-",
    gRightShoulder
  ),
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 4)),
    "+",
    gLeftShoulder
  ),
  " ",
  startingCY
);
const keyPath9 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "-",
    gRightShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "+",
    aLeftShoulder
  ),
  " V ",
  blackHeight,
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "-",
    gRightShoulder
  ),
  " ",
  startingCY
);
const keyPath10 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "+",
    aLeftShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "-",
    aRightShoulder
  ),
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 5)),
    "+",
    aLeftShoulder
  ),
  " ",
  startingCY
);
const keyPath11 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "-",
    aRightShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "+",
    aLeftShoulder
  ),
  " V ",
  blackHeight,
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "-",
    aRightShoulder
  ),
  " ",
  startingCY
);
const keyPath12 = "M".concat(
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "+",
    bLeftShoulder
  ),
  " ",
  startingCY,
  " V ",
  blackHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
  " V ",
  whiteHeight,
  " H ",
  evalMath(startingCX, "+", evalMath(whiteWidth, "*", 7)),
  " V ",
  startingCY,
  " L ",
  evalMath(
    evalMath(startingCX, "+", evalMath(whiteWidth, "*", 6)),
    "+",
    bLeftShoulder
  ),
  " ",
  startingCY
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <svg>
          <g>
            <path id="c" d={keyPath1} fill="white" stroke="black" />
            <path id="cs" d={keyPath2} fill="black" stroke="black" />
            <path id="d" d={keyPath3} fill="white" stroke="black" />
            <path id="ds" d={keyPath4} fill="black" stroke="black" />
            <path id="e" d={keyPath5} fill="white" stroke="black" />
            <path id="f" d={keyPath6} fill="white" stroke="black" />
            <path id="fs" d={keyPath7} fill="black" stroke="black" />
            <path id="g" d={keyPath8} fill="white" stroke="black" />
            <path id="gs" d={keyPath9} fill="black" stroke="black" />
            <path id="a" d={keyPath10} fill="white" stroke="black" />
            <path id="as" d={keyPath11} fill="black" stroke="black" />
            <path id="b" d={keyPath12} fill="white" stroke="black" />
          </g>
        </svg>
      </header>
    </div>
  );
}

export default App;
