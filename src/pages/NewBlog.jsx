import { Button, MenuItem, Paper, TextField, Typography } from "@mui/material";

import { Box } from "@mui/material";
import { StyleSubmit } from "../styles/globalStyle";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCall from "../hooks/useBlogCall";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { getBlogData, postBlogData } = useBlogCall();
  const [info, setInfo] = useState([]);

  const { categories } = useSelector((props) => props.blog);
  const navigate = useNavigate();
  useEffect(() => {
    getBlogData("blogs");
    getBlogData("categories");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <Paper
      elevation={8}
      sx={{ width: "350px", padding: "2rem", m: "auto", mt: 5 }}
    >
      <Typography>New Blog</Typography>

      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={(e) => {
          e.preventDefault();
          postBlogData("blogs", info);
          getBlogData("blogs");
          console.log(info);
          navigate("/");
        }}
      >
        <TextField
          label="Title"
          name="title"
          id="title"
          type="text"
          variant="outlined"
          value={info.title || ""}
          onChange={handleChange}
          required
        />
        <TextField
          label="Image URL"
          name="image"
          id="image"
          type="text"
          required
          variant="outlined"
          value={info.image || ""}
          onChange={handleChange}
        />

        <TextField
          id="category"
          value={info.category || 1}
          onChange={handleChange}
          label="categories"
          name="category"
          select
          fullWidth
          required
        >
          <MenuItem>Please choose...</MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat.id} value={cat.id}>
              {cat.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="status"
          value={info.status || ""}
          onChange={handleChange}
          autoWidth
          label="Status"
          name="status"
          select
          required
        >
          <MenuItem>Please choose...</MenuItem>
          <MenuItem value="d">Draft</MenuItem>
          <MenuItem value="p">Puslished</MenuItem>
        </TextField>

        <TextField
          label="Content"
          name="content"
          id="content"
          type="content"
          variant="outlined"
          value={info.content}
          onChange={handleChange}
          required
          multiline
        />

        <Button type="submit" variant="contained" size="large" sx={StyleSubmit}>
          New Blog
        </Button>
      </Box>
    </Paper>
  );
};

export default NewBlog;
