import {  Grid, styled } from "@mui/material";
import testLogo from "../assets/testLogo.png";


 const Logo = styled(Grid, {
    name: "Logo",
    
  })({
    width: "128px",
    height: "22px",
    padding: "10px",
    backgroundImage: testLogo,
    backgroundSize: "100% 100%",
    

  });
  export default Logo;

