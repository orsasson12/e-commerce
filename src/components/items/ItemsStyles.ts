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
    position:'relative',
    // transform: "scale(1.1,1.1)",
    transform: "rotate(3deg)",
    transition: "0.5s all",
    transformOrigin: "left 2px",
    top:'2rem',
    
  },
};

export const CardMediaStyles = {
  margin: "0 auto",
  width: "90%",
  height: "250px",
  backgroundPosition: "center",
  backgroundSize: "contain",
  "&:hover":{
    transform: "perspective(23rem)"
  }
};


export const categoryStyle = {
  position: "relative",
  top: "15%",
  zIndex: "-1",
  left: "10.4%",
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

