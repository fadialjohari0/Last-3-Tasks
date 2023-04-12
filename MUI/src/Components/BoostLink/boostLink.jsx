import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { CustomBtn } from "../CustomStyledComponents/CustomStyledComponents";

import btmImage from "../../images/bg-boost-desktop.svg";

export default function BoostLink() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${btmImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem",
        backgroundColor: "#332d44",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white", fontWeight: "700", whiteSpace: "nowrap" }}
        align="center"
      >
        Boost your links today
      </Typography>
      <CustomBtn
        sx={{
          padding: { xs: "10px 62px", md: "10px 30px" },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "white", fontWeight: "700", whiteSpace: "nowrap" }}
        >
          Get Started
        </Typography>
      </CustomBtn>
    </Box>
  );
}
