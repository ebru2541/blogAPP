export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  mt:3
};

export const btnStyle = {
  cursor: "pointer",
  bgcolor: "#26c6da",
  "&:hover": {
    color: "#26c6da",
    bgcolor: "white",
    border: "2px solid #26c6da",
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
  "& .MuiContainer-root": {
    backgroundColor: "#1769aa",
  },
};


export const iconStyle = {
   display: "flex", 
   gap: ".4rem" 
  };

  export const flexJustify = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  export const StyleSubmit = {
    bgcolor: "#009688",
    "&:hover": { opacity: ".7", bgcolor: "#009688" },
  };