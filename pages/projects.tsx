import Image from "next/image";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Header from "../conponents/Header";
import Card from "../conponents/Card";
import { Typography, Grid, Paper } from "@mui/material";
import projectData from "@/src/project-data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

const projects = projectData.projectList.map((p) => (
  <Grid key={p.pid} item xs={4}>
    <Item>
      <Card
        projectId={p.pid.toString()}
        projectName={p.projectTitle}
        projectDescription={p.projectDescription}
      />
    </Item>
  </Grid>
));

export default function Projects() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          My Project
        </Typography>
        <Grid container spacing={2}>
          {projects}
        </Grid>
      </Container>
    </>
  );
}
