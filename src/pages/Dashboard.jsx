import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Grid, Paper } from "@mui/material";
import { btnStyle, flex, flexJustify, iconStyle } from "../styles/globalStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const firms = [];
  const navigate = useNavigate();
  return (
    <Grid container sx={flex}>
      {/* {firms?.map((firm) => ( */}
      <Grid item>
        <Paper elevation={6} sx={{ maxWidth: 350, height: "400px" }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardContent>
            <Box sx={iconStyle}>
              <AccountCircleIcon sx={{ fontSize: "1.4rem" }} />
              <Typography>admin</Typography>
            </Box>

            <Box sx={flexJustify}>
              <Box sx={{ display: "flex", gap: ".6rem"}}>
                <Box sx={iconStyle}>
                  <FavoriteIcon />
                  <Typography>3</Typography>
                </Box>
                <Box sx={iconStyle}>
                  <ChatBubbleOutlineIcon />
                  <Typography>3</Typography>
                </Box>
                <Box sx={iconStyle}>
                  <VisibilityIcon />
                  <Typography>3</Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  sx={btnStyle}
                  variant="contained"
                  // onClick={() => navigate(`/detail/${id}`)}
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Paper>
      </Grid>
      {/* ))} */}
    </Grid>
  );
}
