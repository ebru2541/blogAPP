import { Box, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

const Profile = () => {
const navigate=useNavigate()

  return (
    <Box sx={{ display: "flex" }}>
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
