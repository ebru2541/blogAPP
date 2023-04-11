import { Box, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const { image, firstName, email } = useSelector((state) => state.auth);
  console.log(image);
  return (
    <Box
      sx={{
        display: "flex",
        mt: 5,
        gap: 3,
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Card sx={{ width: 280, m: "auto" }}>
          <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <ListItemButton onClick={() => navigate("/profile/update")}>
          Password değiştir
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/profile/delete")}>
          kullanıcı bilgilerini güncelle
        </ListItemButton>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Profile;
