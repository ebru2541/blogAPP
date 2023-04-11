
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Paper } from "@mui/material";
import {
  StyleSubmit,
  flex,
  flexJustify,
  iconStyle,
  textStyle,
  titleStyle,
} from "../styles/globalStyle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import useBlogCall from "../hooks/useBlogCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { getBlogData, postLike, getBlogIdData, getLikeComment } =
    useBlogCall();
  const { blogs } = useSelector((state) => state.blog);
   const { token } = useSelector((state) => state.auth);
   console.log(token)
console.log(blogs)
  useEffect(() => {
    getBlogData("blogs");
  }, []);
  const navigate = useNavigate();
  return (
    <Grid container sx={flex}>
      {blogs.map((blog) => (
        <Grid item key={blog.id}>
          <Paper
            elevation={6}
            sx={{ maxWidth: 300,minWidth:300, height: "400px", objectFit: "cover", p: 3 }}
          >
            <Box>
              <Box sx={{ display: "flex" }}>
                <AccountCircleIcon sx={{ fontSize: "1.8rem" }} />
                <Typography variant="body1">{blog.author}</Typography>
              </Box>

              <Box>
                <Typography variant="body2">
                  {new Date(blog.publish_date).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
            <CardMedia
              component="img"
              height="140"
              image={blog.image}
              alt="green iguana"
            />
            <Box sx={{ height: "180px" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={titleStyle}
              >
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={textStyle}>
                {blog.content}
              </Typography>
            </Box>
            <Box>
              <Box sx={flexJustify}>
                <Box sx={{ display: "flex", gap: ".6rem" }}>
                  <Box sx={iconStyle}>
                    {blog.likes ? (
                      <FavoriteIcon
                        sx={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          postLike("likes", blog.id);
                          getBlogData("blogs");
                        }}
                      />
                    ) : (
                      <FavoriteIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          postLike("likes", blog.id);
                          getBlogData("blogs");
                        }}
                      />
                    )}
                    <Typography>{blog.likes}</Typography>
                  </Box>
                  <Box sx={iconStyle}>
                    <ChatBubbleOutlineIcon />
                    <Typography>{blog.comment_count}</Typography>
                  </Box>
                  <Box sx={iconStyle}>
                    <VisibilityIcon />
                    <Typography>{blog.post_views}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={StyleSubmit}
                    onClick={() => {
                      navigate(`/detail/${blog.id}`);
                      getBlogIdData("blog", blog.id);
                    }}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
