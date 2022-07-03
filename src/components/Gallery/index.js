import {
  Backdrop,
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MyModal from "../Modal/MyModal";
import { itemData } from "./data";
import {
  GalleryContainer,
  TextWrapper,
  Column1,
  Column2,
  BouncyDiv,
  FadeInDiv,
} from "./StyledGallery";

const style = {
  color: "#E78EA9",
  fontFamily: "Water Brush",
};

function Gallery() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [currentImg, setCurrentImg] = useState(null);

  const handleClicks = (index) => {
    setCurrentImg(index.img);
  };

  return (
    <GalleryContainer>
      <Column1>
        <BouncyDiv>
          <TextWrapper>
            <Typography variant="h3" sx={style}>
              Take A Look At My Work:
            </Typography>
          </TextWrapper>
        </BouncyDiv>
      </Column1>
      <Column2>
        <ImageList
          sx={{ width: 600, height: 670 }}
          variant="woven"
          cols={4}
          gap={6}
        >
          {itemData.map((item, index) => (
            <ImageListItem key={item.img} onClick={handleOpen}>
              <img
                onClick={() => handleClicks(item, index)}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}

          <MyModal open={open} onClose={handleClose} currentImg={currentImg} />
        </ImageList>
      </Column2>
    </GalleryContainer>
  );
}

export default Gallery;
