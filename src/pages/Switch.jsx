import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { lightTheme, darkTheme } from "../styles/theme";
import { IconButton } from "@mui/material";

const Switch = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <div>
      <IconButton onClick={toggleTheme}>
        {theme === lightTheme ? (
          <Brightness4Icon sx={{ color: "gray" }} />
        ) : (
          <Brightness7Icon sx={{ color: "orange" }} />
        )}
      </IconButton>
    </div>
  );
};

export default Switch;
