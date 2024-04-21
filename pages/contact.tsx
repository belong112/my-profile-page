import Container from "@mui/material/Container";
import { Box, Typography, Link } from "@mui/material";
import Header from "@/components/Header";

export default function Projects() {
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
              variant="body1"
              color="inherit"
              gutterBottom
              sx={{ margin: "30px 0px" }}
            >
              email : belongbelong223@gmail.com
            </Typography>
            <Typography
              variant="body1"
              color="inherit"
              gutterBottom
              sx={{ margin: "30px 0px" }}
            >
              github :
              <Link
                href="https://github.com/belong112"
                underline="hover"
                color="inherit"
                target="_blank"
                rel="noreferrer"
              >
                {" https://github.com/belong112"}
              </Link>
            </Typography>
          </Box>
        </main>
      </Container>
    </>
  );
}
