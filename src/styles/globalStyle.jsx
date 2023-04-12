export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  mt: 3,
};

export const btnStyle = {
  bgcolor: "#0d7381",
  "&:hover": {
    color: "#0d7381",
    bgcolor: "white",
    border: "2px solid #0d7381",
  },
};

export const flexCenter = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};
export const navbarStyle = {
  "& .MuiPaper-root": {
    backgroundColor: "#0d7381",
    color: "danger",
  },
};

export const iconStyle = {
  display: "flex",
  gap: ".2rem",
};

export const flexJustify = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const StyleSubmit = {
  bgcolor: "#009688",
  color: "white",
  fontSize: ".7rem",
  "&:hover": { opacity: ".7", bgcolor: "#009688" },
};

export const textStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
};

export const titleStyle = {
  whiteSpace: " nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingTop: "1.6rem",
};

export const footerStyle = {
  width: "100%",
  height: "5px",
  bgcolor: "#009688",
};
