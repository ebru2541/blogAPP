import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useAuthCall from "../../hooks/useAuthCall";
import Button from "@mui/material/Button";
import { useState } from "react";

const DeleteModal = () => {
  const { changeUserName } = useAuthCall();
  const [info, setInfo] = useState({
    username: "",
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeUserName(info);
    console.log(info);
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 5 }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="User Name"
        name="username"
        id="userName"
        type="text"
        variant="outlined"
        value={info.username || ""}
        onChange={handleChange}
      />
      <TextField
        label="First Name"
        name="first_name"
        id="firstName"
        type="text"
        variant="outlined"
        value={info.first_name || ""}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="last_name"
        id="last_name"
        type="text"
        variant="outlined"
        value={info.last_name || ""}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" size="large">
        Submit
      </Button>
    </Box>
  );
};

export default DeleteModal;
