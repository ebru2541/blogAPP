import { Paper, Typography } from "@mui/material";
import React from "react";
import myImage from "../assets/my.jpg";

const About = () => {
  return (
    <Paper
      elevation={7}
      sx={{
        width: "30%",
        m: "auto",
        mt: "3rem",
        p: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={myImage} alt="avatar" width="200px"></img>
      <Typography color="error" aling="center" sx={{ fontSize: "1.5rem" }}>
        ROSE{" "}
      </Typography>
      <Typography color="error" sx={{ fontSize: "1.2rem" }}>
        FRONTEND DEVELOPER
      </Typography>
    </Paper>
  );
};

export default About;
