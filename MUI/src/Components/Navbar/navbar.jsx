import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@emotion/react";
import {
  Grid,
  Typography,
  IconButton,
  Menu,
  Button,
  Hidden,
  useMediaQuery,
} from "@mui/material";

import {
  CustomAppBar,
  StyledToolbar,
  NavCustomBtns1,
  CustomBtn,
  CustomMenuItem,
  CustomDivider,
} from "../CustomStyledComponents/CustomStyledComponents";

const toolbarStyles = {
  margin: {
    xs: "0 0",
    sm: "0 3rem",
    lg: "0 6rem",
  },
};

const typographyStyles = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "black",
  letterSpacing: "0.5px",
};

const loginButtonStyles = {
  marginRight: "1rem",
  color: "gray",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
};

const menuPaperStyles = {
  "& .MuiPaper-root": {
    backgroundColor: "#393052",
    color: "white",
    width: "100%",
    boxShadow: "none",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    padding: "1rem",
  },
};

export default function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isCustomMobile = useMediaQuery(theme.breakpoints.down("customMobile"));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <CustomAppBar position="static">
      <StyledToolbar sx={toolbarStyles}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Grid container alignItems="center" gap="20px">
              <Grid item>
                <Typography variant="h1" sx={typographyStyles}>
                  Shortly
                </Typography>
              </Grid>
              <Hidden only={["xs", "sm"]}>
                <Grid item>
                  <NavCustomBtns1 href="#features">Features</NavCustomBtns1>
                </Grid>
                <Grid item>
                  <NavCustomBtns1 href="#pricing">Pricing</NavCustomBtns1>
                </Grid>
                <Grid item>
                  <NavCustomBtns1 href="#resources">Resources</NavCustomBtns1>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container>
              <Hidden only={["xs", "sm"]}>
                <Button href="#login" sx={loginButtonStyles}>
                  Login
                </Button>
                <CustomBtn variant="contained" href="#signup">
                  Sign Up
                </CustomBtn>
              </Hidden>

              {isCustomMobile && (
                <>
                  <IconButton
                    edge="end"
                    color="black"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      "aria-labelledby": "responsive-menu",
                    }}
                    sx={menuPaperStyles}
                  >
                    <CustomMenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href="#features"
                    >
                      Features
                    </CustomMenuItem>
                    <CustomMenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href="#pricing"
                    >
                      Pricing
                    </CustomMenuItem>
                    <CustomMenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href="#resources"
                    >
                      Resources
                    </CustomMenuItem>
                    <CustomDivider />

                    <CustomMenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href="#login"
                    >
                      Login
                    </CustomMenuItem>
                    <CustomMenuItem
                      onClick={handleMenuClose}
                      component="a"
                      href="#signup"
                    >
                      <CustomBtn
                        variant="contained"
                        sx={{
                          padding: `${theme.spacing(1.2, 10)}`,
                          width: "90%",
                        }}
                      >
                        Sign Up
                      </CustomBtn>
                    </CustomMenuItem>
                  </Menu>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </StyledToolbar>
    </CustomAppBar>
  );
}
