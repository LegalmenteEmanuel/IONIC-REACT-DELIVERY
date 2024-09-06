import React from "react";
import { Box, Typography, Link, Grid, TextField, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../../assets/landing/4now.svg";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#D3ECFA",
        color: "#000",
        padding: "40px 20px",
        borderRadius: "16px 16px 0 0",
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              src={logo}
              alt="4Now Logo"
              style={{ marginBottom: "20px", width: "150px", height: "auto" }}
            />
            <Typography
              variant="body1"
              sx={{ marginBottom: "20px", textAlign: "center" }}
            >
              Nuestro trabajo es proveerte de un servicio delivery de calidad y
              rápido.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <InstagramIcon sx={{ cursor: "pointer", fontSize: "30px" }} />
              <FacebookIcon sx={{ cursor: "pointer", fontSize: "30px" }} />
              <TwitterIcon sx={{ cursor: "pointer", fontSize: "30px" }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            A cerca de
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Nosotros
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Novedades
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Noticias
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Compañía
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            ¿Por qué 4Now?
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Únete a nosotros
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            FAQ
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Blog
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Ayuda
          </Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Cuenta
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Centro de soporte
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Contáctanos
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            display="block"
            sx={{ marginBottom: "10px" }}
          >
            Accesibilidad
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "20px" }}>
            Danos un aviso
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Preguntas o feedback. Nos encantaría escucharte.
          </Typography>
          <Box component="form" sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Dirección de correo"
              variant="outlined"
              size="small"
              sx={{ marginRight: "10px", flex: 1 }}
            />
            <Button variant="contained" color="primary" size="small">
              Enviar
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "40px", textAlign: "center" }}>
        <Typography variant="body2">
          © 2024 QALI-T. Todos los derechos reservados.
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Link href="#privacy" color="inherit" underline="hover">
            Política de privacidad
          </Link>{" "}
          |{" "}
          <Link href="#terms" color="inherit" underline="hover">
            Términos de servicio
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
