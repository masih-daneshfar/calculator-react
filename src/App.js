import { useState } from "react";
import { BackgroundContainer, CalculatorContainer } from "./components/container";
import ButtonsView from "./views/ButtonsView";
import { DisplayView } from "./views/DisplayView";

function App() {
  const [calcResult, setCalcResult] = useState("0");
  const [calculationString, setCalculationString] = useState("");
  const appendToCalculationString = (calcString) => {
    setCalculationString((prev) => `${prev}${calcString}`);
  };
  const clearCalculation = () => {
    setCalculationString("");
    setCalcResult("0");
  };
  const removeLastChar = () => {
    setCalculationString((prev) => prev.slice(0, -1));
  };
  const submitCalculation = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(calculationString);
      setCalcResult(result);
    } catch (error) {
      setCalcResult("Err ...");
    }
  };
  return (
    <div className='App'>
      <BackgroundContainer>
        <CalculatorContainer>
          <DisplayView calcResult={calcResult} calculationString={calculationString} />
          <ButtonsView
            appendToCalculationString={appendToCalculationString}
            clearCalculation={clearCalculation}
            submitCalculation={submitCalculation}
            removeLastChar={removeLastChar}
          />
        </CalculatorContainer>
      </BackgroundContainer>
    </div>
  );
}

export default App;
