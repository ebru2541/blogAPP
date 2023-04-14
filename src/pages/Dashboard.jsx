import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid, Paper } from "@mui/material";
import {
  
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
import loadImg from "../assets/loading.gif";
import Switch from "./Switch";
import { lightTheme } from "../styles/theme";

export default function Dashboard({ theme, setTheme }) {
  const { getBlogData, postLike, getBlogIdData } = useBlogCall();
  const { blogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    getBlogData("blogs");
  }, []);
  const color = theme === lightTheme ? "white" : "#b0bec5";

  console.log(color);
  const navigate = useNavigate();
  return (
    <Box bgcolor={color}>
      {loading && (
        <Box display="flex" justifyContent="center">
          <img src={loadImg} alt="My Image" width="350px" />
        </Box>
      )}
      {/* <Switch theme={theme} setTheme={setTheme} /> */}
      {!loading && (
        <Grid container sx={flex}>
          {blogs.map((blog) => (
            <Grid item key={blog.id}>
              <Paper
                elevation={6}
                sx={{
                  maxWidth: 300,
                  minWidth: 300,
                  height: "400px",
                  objectFit: "cover",
                  p: 3,
                }}
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={textStyle}
                  >
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
                        sx={{
                          bgcolor: theme.primary,
                          color: "white",
                          fontSize: ".7rem",
                          "&:hover": { opacity: ".7", bgcolor: "#009688" },
                        }}
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
      )}
    </Box>
  );
}
