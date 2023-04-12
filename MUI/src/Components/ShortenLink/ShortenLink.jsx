import React from "react";
import { Grid, TextField, Box } from "@mui/material";

import { CustomBtn } from "../CustomStyledComponents/CustomStyledComponents";

import bgImage from "../../images/bg-shorten-desktop.svg";

export default function ShortenLink() {
  return (
    <Grid container justifyContent="center">
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: { xs: 3, md: 4.5 },
          backgroundColor: "#332d44",
          width: "70%",
          borderRadius: "10px",
          position: "absolute",
          top: "-65px",
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs="12" md="9.5">
            <TextField
              fullWidth
              label="Shorten a link here..."
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-input": {
                  padding: { xs: "14px", md: "18.5px 14px" },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
            />
          </Grid>
          <Grid item xs="12" md="2.5">
            <CustomBtn
              fullWidth
              variant="contained"
              sx={{
                borderRadius: "5px",
                padding: { xs: "8px 0", md: "15px 0" },
              }}
            >
              Shorten it!
            </CustomBtn>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
