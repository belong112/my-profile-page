import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/conponents/Header";
import MainBlock from "@/conponents/MainBlock";

const mainBlock = {
  title: "哈囉，歡迎來到我的小站",
  description:
    "這是邱昱禎的個人網站，內有自我介紹、我過去製作的專案、我的聯絡方式。歡迎隨意逛逛。",
  image: "https://source.unsplash.com/_LfLA5Nqfko",
  imageText: "main image description",
};

export default function Home() {
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
        <MainBlock post={mainBlock} />
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        ></Box>
      </Container>
    </>
  );
}
