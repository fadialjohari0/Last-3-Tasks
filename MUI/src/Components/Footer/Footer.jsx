import React from "react";
import { Grid, Typography, Box, Link } from "@mui/material";
import styled from "@emotion/styled";

import logo from "../../images/logo.svg";
import facebookIcon from "../../images/icon-facebook.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pinterestIcon from "../../images/icon-pinterest.svg";
import instagramIcon from "../../images/icon-instagram.svg";

const CustomLink = styled(Link)({
  color: "#b7b5ba",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    color: "#02cfd1",
    textDecoration: "none",
  },
});

const FooterLinkItem = ({ title, content }) => (
  <>
    {title && (
      <Typography
        variant="body1"
        sx={{
          paddingBottom: "1rem",
          fontWeight: "700",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {title}
      </Typography>
    )}
    <Typography
      variant="body2"
      sx={{
        paddingBottom: "0.5rem",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <CustomLink>{content}</CustomLink>
    </Typography>
  </>
);

const SocialIcon = styled(Box)({
  cursor: "pointer",
  marginRight: "1rem",

  "&:last-child": {
    marginRight: 0,
  },
});

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#232027",
        color: "#f4f3f4",
        padding: "3rem 4rem 2rem 4rem",
      }}
    >
      <Grid container spacing={1} justifyContent="space-around">
        <Grid
          item
          xs={12}
          sm={2}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Box
            component="img"
            src={logo}
            sx={{
              filter: "invert(1) brightness(2) contrast(2)",
              width: "100px",
            }}
          ></Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FooterLinkItem title="Features" content="Link Shortening" />
          <FooterLinkItem content="Branded Links" />
          <FooterLinkItem content="Analytics" />
        </Grid>

        <Grid item xs={12} sm={2}>
          <FooterLinkItem title="Resources" content="Blog" />
          <FooterLinkItem content="Developers" />
          <FooterLinkItem content="Support" />
        </Grid>

        <Grid item xs={12} sm={2}>
          <FooterLinkItem title="Company" content="About" />
          <FooterLinkItem content="Our Team" />
          <FooterLinkItem content="Careers" />
          <FooterLinkItem content="Contact" />
        </Grid>

        <Grid item xs={12} sm={2}>
          <Grid container justifyContent={{ xs: "center", sm: "left" }}>
            <SocialIcon component="img" src={facebookIcon} />
            <SocialIcon component="img" src={twitterIcon} />
            <SocialIcon component="img" src={pinterestIcon} />
            <SocialIcon component="img" src={instagramIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
