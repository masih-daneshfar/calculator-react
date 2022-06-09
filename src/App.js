import { BackgroundContainer, CalculatorContainer, CalculatorDisplayContainer } from "./components/container";
import { CalculationText, ResultText } from "./components/text";

function App() {
  return (
    <div className='App'>
      <BackgroundContainer>
        <CalculatorContainer>
          <CalculatorDisplayContainer>
            <CalculationText>2341.34</CalculationText>
            <ResultText>245.35.23</ResultText>
          </CalculatorDisplayContainer>
        </CalculatorContainer>
      </BackgroundContainer>
    </div>
  );
}

export default App;
