import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/landing/4now.svg";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        height: { xs: 80, md: 120 },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="4Now Logo"
            sx={{ height: { xs: 60, md: 120 }, mr: 1 }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#51A7F9",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            4NOW
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Button
            href="/login"
            variant="contained"
            color="primary"
            sx={{
              mx: 1,
              borderRadius: 20,
              backgroundColor: "#51A7F9",
              color: "#FFFFFF",
            }}
          >
            Inicio
          </Button>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 1, textDecoration: "none", color: "#51A7F9" }}
          >
            ¿Por qué 4Now?
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 1, textDecoration: "none", color: "#000" }}
          >
            Servicios
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 1, textDecoration: "none", color: "#000" }}
          >
            Contactos
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ mx: 1, textDecoration: "none", color: "#000" }}
          >
            Nosotros
          </Link>
          <Button
            href="/sign"
            variant="outlined"
            color="primary"
            sx={{ ml: 1, borderRadius: 20 }}
          >
            Regístrate
          </Button>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none", color: "#000" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={RouterLink} to="/login">
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="¿Por qué 4Now?" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Servicios" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Contactos" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Nosotros" />
              </ListItem>
              <ListItem button component={RouterLink} to="/sign">
                <ListItemText primary="Regístrate" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
