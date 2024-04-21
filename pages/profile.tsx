import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "@/public/images/profile-pic.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Header from "@/components/Header";

type SkillData = {
  title: string;
  skill: Array<string>;
};

type Data = {
  introduction: string;
  skills: Array<SkillData>;
};

function SkillList({ skillData }: { skillData: Array<string> }) {
  const lists = skillData.map((item: string) => (
    <Typography color="text.secondary" sx={{ fontSize: "20px" }} key={item}>
      - {item}
    </Typography>
  ));

  return <Box sx={{ pl: 1 }}>{lists}</Box>;
}

function SkillBox({ skills }: { skills: Array<SkillData> }) {
  const lists = skills.map((field: SkillData) => (
    <Grid item md={4} key={field.title}>
      <Box sx={{ p: 1, minHeight: "250px" }}>
        <Typography variant="h5" gutterBottom>
          {field.title}
        </Typography>
        <SkillList skillData={field.skill} />
      </Box>
    </Grid>
  ));

  return <>{lists}</>;
}

export default function Projects() {
  const [introduction, setIntroduction] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setIntroduction(data.introduction);
        setSkills(data.skills);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            個人經歷
          </Typography>
          <Grid container spacing={2} sx={{ p: 6 }}>
            <Grid item md={6}>
              <Box>
                <Image
                  src={profilePic}
                  alt="my picture :)"
                  width={400}
                  loading="lazy"
                />
              </Box>
              <Typography>{`It's me : )`}</Typography>
            </Grid>
            <Grid item md={6}>
              <Typography sx={{ fontSize: "20px" }} color="inherit">
                {introduction}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pd: 6 }}>
            <Grid item md={12}>
              <Typography variant="h4">我的技能樹</Typography>
            </Grid>
            <Grid container spacing={2} item md={12}>
              <SkillBox skills={skills} />
            </Grid>
          </Grid>
        </main>
      </Container>
    </>
  );
}
