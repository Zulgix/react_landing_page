import React from "react";
import { Button } from "../StyledButton";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./StyledInfoSectionRevesrsed";

function InfoSection2({lightBg, lightText,id,headLine, lightTextDesc, topLine, headline, description, buttonLabel, imgStart, img, alt, dark, primary, darkText}) {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}> 
          <Column2>
                <ImgWrap>
                    <Img src={img} alt={alt}/>
                </ImgWrap>
            </Column2>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button to="home" smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? "true" : "false"} dark={dark ? "ture" : "false"}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
}

export default InfoSection2;
