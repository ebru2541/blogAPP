import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import { iconStyle } from "../styles/globalStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useParams } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import CommentCard from "../components/blog/CommentCard";
import CommentForm from "../components/blog/CommentForm";

const Detail = () => {
  const { id } = useParams();
  const [toggle, setToggle] = useState(false);
  const { blog } = useSelector((state) => state.blog);
  const { getBlogIdData } = useBlogCall();
  useEffect(() => {
    getBlogIdData("blog", id);
  }, []);
  return (
    <Box sx={{ width: "80%", m: "auto", paddingTop: "3", mt: 4 }}>
      <Box sx={iconStyle}>
        <AccountCircleIcon sx={{ fontSize: "2rem", color: "error" }} />
        <Typography>{blog.author}</Typography>
      </Box>

      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CardContent>
          <img
            component="img"
            src={blog.image}
            alt={blog.title}
            width="200px"
            height="fit-content"
          />
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.content}
          </Typography>
          <Box sx={{ display: "flex", gap: ".6rem" }}>
            <Box sx={iconStyle}>
              {blog.likes ? (
                <FavoriteIcon sx={{ color: "red", cursor: "pointer" }} />
              ) : (
                <FavoriteIcon sx={{ cursor: "pointer" }} />
              )}
              <Typography>{blog.likes}</Typography>
            </Box>
            <Box sx={iconStyle}>
              <ChatBubbleOutlineIcon
                onClick={() => {
                  setToggle(!toggle);
                  getBlogIdData("blog", id);
                }}
              />
              <Typography>{blog.comment_count}</Typography>
            </Box>
            <Box sx={iconStyle}>
              <VisibilityIcon />
              <Typography>{blog.post_views}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
          }}
        >
          {blog?.comments?.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        </Box>

        {toggle && <CommentForm id={blog?.id} />}
      </Container>
    </Box>
  );
};

export default Detail;
