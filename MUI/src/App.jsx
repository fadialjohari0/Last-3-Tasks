import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/Header";
import ShortenLink from "./Components/ShortenLink/ShortenLink";
import Statistics from "./Components/Statistics/statistics";
import BoostLink from "./Components/BoostLink/boostLink";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Header />
      <div
        style={{
          backgroundColor: "#f7f7fa",
          position: "relative",
          paddingBottom: "6rem",
        }}
      >
        <ShortenLink />

        <Statistics />
      </div>
      <BoostLink />
      <Footer />
    </>
  );
}

export default App;
