
export const productStyle = {
  maxWidth: "500px",
  borderRadius: "20px",
  border: "5px solid #fff",
  boxShadow:
    "inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);",
};
export const containerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexDirection:{xs:'column-reverse'}
};
export const productContainerStyle = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: 'center',
  justifyContent:'space-evenly',
  marginTop:{xs:'5rem',md:'10rem'}
};
export const productCardStyle = {
  position: "relative",
  borderRadius: "10px",
  border: "4px solid #fff",
  boxShadow: "0 7px 29px 0 hsl(240deg 5% 41% / 20%)",
  cursor: "pointer",
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
};
export const productImageStyle = {
  overflow: "hidden",
  objectFit: "contain",
  height: { xs: "250px", md: "400px" },
  position: "relative",
  top: "0",
  left: "0",
  borderRadius: "20px 20px 20% 20%",
};
export const productImageCategoryStyle = {
  overflow: "hidden",
  objectFit: "contain",
  height: { xs: "150px", lg: "300px" },
  position: "relative",
  top: "0",
  left: "0",
  borderRadius: "20px 20px 20% 20%",
};
export const productPriceStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  borderRadius: "20px",
  border: "5px solid #fff",
  padding: "2.5rem",
  width: { xs: "100%", md: "500px" },
  maxWidth:{xs:'500px', md:'none'},
  alignItems: "center",
};

export const productsStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gridGap: "30px",
  gap: { xs: "5px", md: "30px" },
  overflow: "visible",
};
