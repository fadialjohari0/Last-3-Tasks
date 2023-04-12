import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { Stack } from "@mui/system";

import { CustomBtn } from "../CustomStyledComponents/CustomStyledComponents";

import illustration from "../../images/illustration-working.svg";

const stackStyles = {
  padding: {
    xs: "0 20px",
    sm: "0 40px",
    md: "0 50px",
    lg: "0 100px",
  },
  overflow: "hidden",
  gap: {
    xs: "30px",
    lg: "100px",
    xl: "100px",
  },
  paddingBottom: "100px",
};

const boxStyles = {
  width: {
    xs: "100%",
    sm: "75%",
    md: "50%",
    lg: "70%",
    xl: "70%",
  },
};

const titleStyles = {
  fontWeight: "bold",
  letterSpacing: "0.5px",
  textAlign: {
    xs: "center",
    md: "left",
  },
  marginBottom: {
    xs: "16px",
    md: "0",
  },
  fontSize: {
    xs: "2.4rem",
    sm: "2.6rem",
    md: "2.7rem",
    lg: "3.5rem",
    xl: "4.0rem",
  },
};

const subtitleStyles = {
  fontWeight: "normal",
  letterSpacing: "0.5px",
  fontSize: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "20px",
    xl: "22px",
  },
  textAlign: {
    xs: "center",
    md: "left",
  },
};

const imgContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: {
    xs: "100%",
    sm: "90%",
    md: "80%",
    xl: "1100px",
  },
};

export default function Header() {
  return (
    <main style={{ paddingBottom: "150px" }}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={stackStyles}
      >
        <Box maxWidth="650px" sx={boxStyles}>
          <Typography variant="h2" sx={titleStyles}>
            More than just shorter links
          </Typography>
          <Typography variant="h5" paragraph sx={subtitleStyles}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Typography>
          <Grid container justifyContent={{ xs: "center", md: "left" }}>
            <CustomBtn variant="contained" href="#get-started">
              Get Started
            </CustomBtn>
          </Grid>
        </Box>

        <Box sx={imgContainerStyles}>
          <img
            src={illustration}
            alt="illustration"
            style={{ width: "100%" }}
          />
        </Box>
      </Stack>
    </main>
  );
}
