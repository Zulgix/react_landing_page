import styled, { keyframes }  from "styled-components";
import muistyled from "@emotion/styled";
import { Button } from "@mui/material";
import { bounce,fadeIn } from 'react-animations';

export const GalleryContainer = styled.div`
  display: flex;
  background: #fffbe7;
  justify-content: space-around;
  align-items: center;
  direction: column;
`;
export const TextWrapper = styled.div`
  display: flex;
  padding-top: 0;
  padding-bottom: 60px;
  justify-content: flex-start;
  align-item: center;
`;
export const Column1 = styled.div`
  margin-bottom: 50px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 50px;
  padding: 0 15px;
  grid-area: col2;
`;
export const StyledButton = muistyled(Button, {
  name: "StyledButton",
})({
  width: "10rem",
  height: "3rem",
  padding: "10px",
  border: "solid",
  borderRadius: "60px",
  borderColor: "black",
  marginTop: "15px",
  marginBottom: "30px",
  background: "#82A284",
  "&:hover": {
    backgroundColor: "#82A284",
    borderColor: "#82A284",
    boxShadow: "none",
  },
});

const bounceAnimation = keyframes`${bounce}`;
const fadeInAnimation = keyframes`${fadeIn}`;
export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const FadeInDiv = styled.div`
animation: 1s ${fadeInAnimation};
`