import styled, { keyframes }  from "styled-components";
import { bounce,fadeIn } from 'react-animations';
import { merge } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const fadeInAnimation = keyframes`${fadeIn}`;
const fadeBounce = merge(bounce, fadeIn);

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const FadeInDiv = styled.div`
animation: 2.5s ${fadeInAnimation};
`

export const FadeBounceDiv = styled.div`
animation: 1s ${fadeBounce};

`
