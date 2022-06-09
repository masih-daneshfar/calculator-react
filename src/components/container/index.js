import styledComponents from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const BackgroundContainer = styledComponents.div`
  height:100vh;
  width:100%;
  background-image:url(${backgroundImage});
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const CalculatorContainer = styledComponents.div`
width:250px;
padding-block:20px;
padding-inline:15px;
background-color:rgba(255,255,255,0.6);
backdrop-filter: blur(5px);
border-radius:20px;
`;
export const CalculatorDisplayContainer = styledComponents.div`
width:100%;
padding-block-start:60px;
padding-block-end:20px;

`;

export const CalculatorRowButtonsContainer = styledComponents.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
margin-block:10px;
`;
