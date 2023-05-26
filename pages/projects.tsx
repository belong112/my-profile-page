import Image from "next/image";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Header from "../conponents/Header";
import { Typography, Grid, Paper } from "@mui/material";
import projectPic1 from "../assets/images/project1.png";
import projectPic2 from "../assets/images/project2.png";
import projectPic3 from "../assets/images/project3.png";

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
              <Typography component="h5" color="inherit" gutterBottom>
                多元議題心理測驗教具
              </Typography>
              <Image
                src={projectPic1}
                alt="project picture"
                width={330}
                loading="lazy"
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Typography component="h5" color="inherit" gutterBottom>
                職涯小站自動化程式
              </Typography>
              <Image
                src={projectPic2}
                alt="my picture :)"
                width={330}
                loading="lazy"
              />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Typography component="h5" color="inherit" gutterBottom>
                均一個人徽章頁面重構
              </Typography>
              <Image
                src={projectPic3}
                alt="my picture :)"
                width={330}
                loading="lazy"
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
