import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Paper } from "@mui/material";
import Header from "@/components/Header";
import Card from "@/components/Card";

import projectData from "@/src/project-data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  paddingTop: "10px",
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
        <main>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            專案製作
          </Typography>
          <Grid container spacing={2}>
            {projects}
          </Grid>
        </main>
      </Container>
    </>
  );
}
