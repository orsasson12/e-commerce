export const CardContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: { xs: "column-reverse", md: "row" },
  margin: "0.5rem",
};

export const CardContentStyles = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexDirection: { xs: "column", md: "row-reverse" },
};

// cart Modal component
export const listStyle = {
  display: "grid",
  gap: "0.3rem",
  width: { sx: "100%", md: "600px", lg: "100%" },
  alignItems: "center",
  marginTop: { xs: "5rem", md: "6rem", lg: "7rem" },
};

export const BoxStyleModal = {
  height: "60vh",
  overflow: "auto",
};

export const BoxModalTitleStyle = {
  fontSize: "2.5rem",
  textAlign: "center",
  marginTop: "3rem",
  color: "white",
};

export const ModalStyle = {
  width: "100%",
  height: "100%",
};

export const TotalPriceStyle = {
  width: { sx: "100%", lg: "100%" },
  textAlign: "center",
  borderRadius: "20px",
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#111000",
};
///
export const PriceBoxStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.5rem",
};
export const BoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};

export const CartIconStyle = {
  "&:hover": {
    cursor: "pointer",
    transform: "Scale(1.2,1.2)",
    transition: "all 0.6s",
  },
};

export {};
