import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Paper } from "@mui/material";
import Header from "@/components/Header";
import Card from "@/components/Card";

type project = {
  pid: number;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  paddingTop: "10px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
}));

function ProjectList({ projectData }: { projectData: Array<project> }) {
  const projects = projectData.map((p) => (
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

  return <>{projects}</>;
}

export default function Projects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjectList(data.projectList);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            專案製作
          </Typography>
          <Grid container spacing={2}>
            <ProjectList projectData={projectList} />
          </Grid>
        </main>
      </Container>
    </>
  );
}
