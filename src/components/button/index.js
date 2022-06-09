import styledComponents from "styled-components";

export const Button = styledComponents.button`
 color:#121212;
all:unset;
background-color:rgba(12,194,179,0.85);
backdrop-filter: blur(5px);
height:45px;
aspect-ratio:${({ variant }) => (variant === "wide" ? "7/3" : "1/1")};
display:flex;
justify-content:center;
align-items:center;
font-family:sans-serif;
font-weight:600;
font-size:1.3rem;
 border-radius:10px;
 color:rgba(255,255,255,0.75);
 transition:background-color 0.3 ease-out box-shadow 0.1 ease-out;

 &:hover,
 &active{
background-color:rgba(12,194,179,0.35);
cursor:pointer;
 }
 &:active{
     box-shadow:inset 0 0 5px rgba(0,0,0,0.3);
 }
`;
