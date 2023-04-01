import { useNavigate } from "react-router-dom";
import errorImg from "../assets/404.png";
import { Box, Button } from "@mui/material";
import { btnStyle, flex } from "../styles/globalStyle";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box align="center">
      <img src={errorImg} alt="error" align="center" />
      <Box sx={flex}>
        <Button sx={btnStyle} variant="contained" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button sx={btnStyle} variant="contained" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
