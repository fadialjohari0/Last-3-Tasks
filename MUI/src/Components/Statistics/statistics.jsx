import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Icon1 from "../../images/icon-brand-recognition.svg";
import Icon2 from "../../images/icon-detailed-records.svg";
import Icon3 from "../../images/icon-fully-customizable.svg";

const ContainerItem = ({ title, content, icon }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      padding: 2,
      backgroundColor: "#fff",
      borderRadius: "5px",
      position: "relative",
      width: "325px",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "-30px",
        left: { xs: "41%", sm: "10%" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3a3053",
          borderRadius: "50%",
          height: "60px",
          width: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={icon}
          sx={{
            height: "30px",
            width: "30px",
          }}
        />
      </Box>
    </Box>

    <Typography
      variant="h6"
      component="h2"
      align="center"
      sx={{
        paddingTop: 4,
        paddingLeft: 1,
        textAlign: { xs: "center", sm: "left" },
        fontWeight: 700,
      }}
    >
      {title}
    </Typography>
    <Typography
      variant="body1"
      align="center"
      sx={{
        paddingTop: 1,
        paddingBottom: 2,
        paddingLeft: 1,
        textAlign: { xs: "center", sm: "left" },
        color: "text.secondary",
      }}
    >
      {content}
    </Typography>
  </Box>
);

const Statistics = () => {
  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "32px", sm: "48px" },
            paddingBottom: "1rem",
          }}
        >
          Advanced Statistics
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              width: {
                xs: "300px",
                md: "350px",
                lg: "425px",
                paddingBottom: "2rem",
              },
            }}
          >
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </Typography>
        </Box>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: "0", md: "1rem" },
          padding: "3rem 5rem",
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <ContainerItem
            icon={Icon1}
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              width: "6px",
              height: { xs: "62px" },
              backgroundColor: "#27cfd0",
              rotate: { xs: "0deg", sm: "90deg" },
            }}
          />
        </Box>

        <Box
          sx={{
            transform: {
              md: "translateY(0)",
              lg: "translateY(32px)",
              zIndex: 1,
            },
          }}
        >
          <ContainerItem
            icon={Icon2}
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              width: "6px",
              height: { xs: "62px" },
              backgroundColor: "#27cfd0",
              rotate: { xs: "0deg", sm: "90deg" },
            }}
          />
        </Box>
        <Box sx={{ transform: { lg: "translateY(64px)", zIndex: 1 } }}>
          <ContainerItem
            icon={Icon3}
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </Box>
      </Box>
    </>
  );
};

export default Statistics;
