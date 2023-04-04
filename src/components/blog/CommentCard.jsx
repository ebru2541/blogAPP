import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const CommentCard = ({ comment }) => {
  return (
    <Paper
      elevation={7}
      sx={{
        padding: 3,
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
