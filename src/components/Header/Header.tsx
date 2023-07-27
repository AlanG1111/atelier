import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MainLogo from "../MainLogo/MainLogo";
import { TelLink } from "./styles";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static' sx={{ background: "rgba(188,133,133,.7)" }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters sx={{ padding: "5px 0" }}>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <MainLogo />
          </Box>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              fontSize: "26px",
              lineHeight: "20px",
              flexDirection: "column",
              fontFamily: "Caveat",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SmartАтельє
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                "& .MuiMenu-list": {
                  display: "flex",
                  flexDirection: "column",
                },
                "& a": {
                  color: "black",
                },
              }}
            >
              <Button onClick={handleCloseNavMenu} href='#prices'>
                <Typography textAlign='center'>Ціни</Typography>
              </Button>
              <Button onClick={handleCloseNavMenu} href='#services'>
                <Typography textAlign='center'>Послуги</Typography>
              </Button>
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexWrap: "wrap",
              flexDirection: "row",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Caveat",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <MainLogo />
            </Box>
            <div style={{ display: "flex", flexDirection: "column" }}>
              SmartАтельє
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href='#prices'
            >
              Ціни
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href='#services'
            >
              Послуги
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <TelLink href='tel:+380961280234'>+38096-128-02-34</TelLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
