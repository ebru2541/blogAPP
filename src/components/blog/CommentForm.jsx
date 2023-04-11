import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import useBlogCall from "../../hooks/useBlogCall";
import { StyleSubmit } from "../../styles/globalStyle";
import { useEffect } from "react";

const CommentForm = ({ id }) => {
  const { postComment, getBlogData, getBlogIdData } = useBlogCall();
  const [info, setInfo] = useState("");

  // useEffect(() => {
  //   getBlogData("blogs");
  // }, []);

  const handleChance = (e) => {
    setInfo({ ...info, post: id, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment("comments", info);
     getBlogIdData("blog", id);

    console.log(info);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Comment"
          name="content"
          id="content"
          type="text"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          placeholder="Add a comment"
          onChange={handleChance}
        />
        <Button type="submit" sx={StyleSubmit}>
          Add Comment
        </Button>
      </Box>
    </form>
  );
};

export default CommentForm;
