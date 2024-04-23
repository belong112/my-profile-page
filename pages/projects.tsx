import { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Typography, Grid, Paper } from "@mui/material";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Dialog from "@/components/Dialog";

type project = {
  pid: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  paddingTop: "10px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "1px solid transparent",
  height: "100%",
  cursor: "pointer",

  "&:hover": {
    border: "1px solid #346ad2",
  },
}));

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const [dialogData, setDialogData] = useState({
    projectName: "",
    projectDescription: "",
    pid: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectList(data.projectList);
      });
  }, []);

  function ProjectList({ projectData }: { projectData: Array<project> }) {
    const handleOnclick = (pid: number) => {
      setDialogData(projectList[pid - 1]);
      setIsOpen(true);
    };

    const projects = projectData.map((p) => (
      <Grid key={p.pid} item xs={4}>
        <Item>
          <Card
            projectId={p.pid.toString()}
            projectName={p.projectName}
            projectDescription={p.projectDescription}
            clickCard={() => handleOnclick(p.pid)}
          />
        </Item>
      </Grid>
    ));

    return <>{projects}</>;
  }

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
          <Dialog
            dialogData={dialogData}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </main>
      </Container>
    </>
  );
}
