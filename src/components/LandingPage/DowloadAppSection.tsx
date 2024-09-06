import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import AppImage from "../../assets/landing/Mobile browsers-cuate.svg";

const DowloadAppSection: React.FC = () => {
  return (
    <Box sx={{ padding: "50px 0", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "75%",
          margin: "0 auto",
          borderRadius: "16px",
          overflow: "hidden",
          padding: "30px",
          backgroundColor: "#fff5f5",
          boxShadow: 3,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#51A7F9", fontWeight: "bold" }}
              >
                Descarga la App
              </Typography>
              <Typography
                variant="h3"
                gutterBottom
                sx={{ color: "#000000", fontWeight: "bold" }}
              >
                ¡Comienza con 4Now hoy!
              </Typography>
              <Typography variant="h6" paragraph sx={{ color: "#000000" }}>
                Descubre la variedad de servicios delivery que ofrecemos y
                disfruta de esta maravillosa experiencia.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginBottom: "20px" , backgroundColor:'#51A7F9', color: "#FFFFFF"}}
              >
                Obtén la App
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={AppImage}
                alt="App Image"
                sx={{ width: "100%", height: "auto", borderRadius: "16px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DowloadAppSection;
