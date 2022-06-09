import { BackgroundContainer, CalculatorContainer } from "./components/container";

function App() {
  return (
    <div className='App'>
      <BackgroundContainer>
        <CalculatorContainer>appCalc</CalculatorContainer>
      </BackgroundContainer>
    </div>
  );
}

export default App;
