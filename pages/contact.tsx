import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import { Box, Typography, Link } from "@mui/material";
import Header from "@/components/Header";

export default function Projects() {
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
        setGithub(data.github);
      });
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
            sx={{}}
          >
            聯絡我
          </Typography>
          <Box>
            <Typography
              variant="h6"
              color="inherit"
              gutterBottom
              sx={{ margin: "30px 0px" }}
            >
              Email : {email}
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              gutterBottom
              sx={{ margin: "30px 0px" }}
            >
              github :
              <Link
                href={github}
                underline="hover"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                {github}
              </Link>
            </Typography>
          </Box>
        </main>
      </Container>
    </>
  );
}
