import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
} from "./StyledHeroSection";
import { Button } from "../StyledButton";
import Video from "../../assets/videoBg.mp4";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
import {BouncyDiv, FadeInDiv} from "../../animations/Animations"
function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
      <BouncyDiv>
        <HeroH1>Welcome To A New World Of Colors! </HeroH1>
      </BouncyDiv>
        <HeroP>Sign Up For Free !</HeroP>
        <FadeInDiv>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="ture"
            to="/signup"
          >
            {" "}
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
          </Button>
        </HeroBtnWrapper>
        </FadeInDiv>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
