import { AppBar, Toolbar, Button, MenuItem, Divider } from "@mui/material";
import { styled } from "@mui/system";

export const CustomAppBar = styled(AppBar)({
  backgroundColor: "white",
  boxShadow: "none",
  paddingTop: "15px",
  paddingBottom: "40px",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
});

export const NavCustomBtns1 = styled(Button)({
  color: "gray",
  fontSize: "12px",
  "&:hover": {
    color: "black",
    backgroundColor: "white",
  },
});

export const CustomBtn = styled(Button)({
  borderRadius: "50px",
  backgroundColor: "#02cfd1",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#8de0e0",
    boxShadow: "none",
  },
});

export const CustomMenuItem = styled(MenuItem)({
  display: "block",
  width: "100%",
});

export const CustomDivider = styled(Divider)({
  backgroundColor: "#9999997d",
  height: "1px",
  width: "100%",
});
