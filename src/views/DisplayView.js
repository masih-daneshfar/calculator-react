import React from "react";
import { CalculatorDisplayContainer } from "../components/container";
import { CalculationText, ResultText } from "../components/text";

export const DisplayView = ({ calcResult = "", calculationString = "" }) => {
  return (
    <>
      <CalculatorDisplayContainer>
        <CalculationText>{calculationString}</CalculationText>
        <ResultText>{calcResult}</ResultText>
      </CalculatorDisplayContainer>
    </>
  );
};
