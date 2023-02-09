/// item Container Styles
export const GridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  padding: "1rem",
  position: "absolute",
  top: "12%",
  justiftyContent: "space-around",
};

// item List Styles
export const CardStyles = {
  width: { xs: "auto", md: "80%" },
  margin: "1.5rem",
  borderRadius: "20px",
  "&:hover": {
    cursor: "pointer",
    transition: "1s all",
    filter: " drop-shadow(7px 9px 10px #c5c3c6)",
  },
};

export const CardMediaStyles = {
  margin: "0 auto",
  width: "90%",
  height: "250px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  "&:hover": {
    transform: "scale(1.1,1.1)",
    transition: "0.5s all",
    filter: " drop-shadow(16px 16px 20px #c5c3c6)",
  },
};

export const categoryStyle = {
  position: "relative",
  top: "5%",
  zIndex: "-1",
  left: "5%",
};

//filterByItemBoxStyles
export const filterByItemBoxStyles = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: "center",
  justifyContent: "center",
  justifySelf: "baseline",
  marginLeft: "1rem",
};

export const menuItemStyle = {
  paddingRight: "5px",
  paddingLeft: "5px",
  marginLeft: "1rem",
};
