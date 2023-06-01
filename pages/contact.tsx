import Container from "@mui/material/Container";
import Header from "../conponents/Header";
import { Box, Typography, Link } from "@mui/material";

export default function Projects() {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Contact me
        </Typography>
        <Box>
          <Typography
            component="h5"
            variant="h5"
            color="inherit"
            gutterBottom
            sx={{ margin: "30px 0px" }}
          >
            email : belongbelong223@gmail.com
          </Typography>
          <Typography
            component="h5"
            variant="h5"
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
      </Container>
    </>
  );
}
