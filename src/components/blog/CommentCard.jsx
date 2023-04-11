import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";



const CommentCard = ({ comment }) => {
   const { getBlogIdData } = useBlogCall();
  useEffect(() => {
    getBlogIdData("blog", comment.id);
  }, []);
  return (
   
      <Paper
        elevation={7}
        sx={{
          padding: 3,
          width: "40%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          component="header"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            aria-label="avatar"
            sx={{ color: "error", backgroundClor: "error" }}
          >
            {comment.user}
          </Avatar>
          <Box>
            <Typography variant="body1">
              {new Date(comment.time_stamp).toLocaleString()}
            </Typography>
            <Typography variant="body1">{comment.user}</Typography>

            <Box>
              <Typography>{comment.content}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
   
  );
};

export default CommentCard;
