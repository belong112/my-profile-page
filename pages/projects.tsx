import Image from "next/image";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Header from "../conponents/Header";
import Card from "../conponents/Card";
import { Typography, Grid, Paper } from "@mui/material";
import projectPic1 from "../assets/images/project1.png";
import projectPic2 from "../assets/images/project2.png";
import projectPic3 from "../assets/images/project3.png";
import projectPic4 from "../assets/images/project4.png";
import projectPic5 from "../assets/images/project5.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

export default function Projects() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          My Project
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Card
                projectName="多元議題心理測驗教具"
                projectPic={projectPic1}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card projectName="職涯小站自動化程式" projectPic={projectPic2} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card
                projectName="均一教育平台徽章頁面重構"
                projectPic={projectPic3}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card
                projectName="均一教育平台側邊目錄"
                projectPic={projectPic4}
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card projectName="行事曆日記" projectPic={projectPic5} />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
