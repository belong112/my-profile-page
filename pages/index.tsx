import { useState, useEffect } from "react";
import Head from "next/head";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/components/Header";
import MainBlock from "@/components/MainBlock";
import Thumb from "@/components/Thumb";

export default function Home() {
  const [mainData, setMainData] = useState({
    title: "",
    description: "",
    image: "",
    imageText: "",
  });

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        setMainData(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>昱禎的暫存空間</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Header />
        <MainBlock post={mainData} />
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        />
        <Thumb />
      </Container>
    </>
  );
}
