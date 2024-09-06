import React from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";
import Delivery from "../../assets/landing/Delivery-amico.svg";

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color={"#000000"} gutterBottom>
              El mejor y más rápido servicio de delivery.
            </Typography>
            <Typography variant="h5" color={"#000000"} paragraph>
              Nuestro trabajo es entregar a tiempo tus productos, comida,
              articulos para el hogar y un sin fin de cosas más.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#51A7F9", color: "#FFFFFF" }}
            >
              Comenzar
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Delivery}
              alt="Hero"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
