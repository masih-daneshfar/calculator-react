import React from "react";
import { Button } from "../components/button";
import { CalculatorRowButtonsContainer } from "../components/container";

const ButtonsView = ({ appendToCalculationString, clearCalculation, submitCalculation, removeLastChar }) => {
  return (
    <>
      <CalculatorRowButtonsContainer>
        <Button onClick={clearCalculation}>Ac</Button>
        <Button onClick={removeLastChar}>&gt;</Button>
        <Button onClick={() => appendToCalculationString("/")}>/</Button>
        <Button onClick={() => appendToCalculationString("*")}>*</Button>
      </CalculatorRowButtonsContainer>
      <CalculatorRowButtonsContainer>
        <Button onClick={() => appendToCalculationString("7")}>7</Button>
        <Button onClick={() => appendToCalculationString("8")}>8</Button>
        <Button onClick={() => appendToCalculationString("9")}>9</Button>
        <Button onClick={() => appendToCalculationString("-")}>-</Button>
      </CalculatorRowButtonsContainer>
      <CalculatorRowButtonsContainer>
        <Button onClick={() => appendToCalculationString("4")}>4</Button>
        <Button onClick={() => appendToCalculationString("5")}>5</Button>
        <Button onClick={() => appendToCalculationString("6")}>6</Button>
        <Button onClick={() => appendToCalculationString("+")}>+</Button>
      </CalculatorRowButtonsContainer>
      <CalculatorRowButtonsContainer>
        <Button onClick={() => appendToCalculationString("1")}>1</Button>
        <Button onClick={() => appendToCalculationString("2")}>2</Button>
        <Button onClick={() => appendToCalculationString("3")}>3</Button>
        <Button onClick={submitCalculation}>=</Button>
      </CalculatorRowButtonsContainer>
      <CalculatorRowButtonsContainer>
        <Button onClick={() => appendToCalculationString("0")} variant='wide'>
          0
        </Button>
        <Button onClick={() => appendToCalculationString(".")}>.</Button>
      </CalculatorRowButtonsContainer>
    </>
  );
};
export default ButtonsView;
