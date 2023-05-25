import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";

interface MainBlockProps {
  post: {
    description: string;
    image: string;
    imageText: string;
    title: string;
    skills: Array<string>;
  };
}

export default function MainBlock(props: MainBlockProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        height: "700px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={{ margin: "30px 0px" }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              paragraph
              sx={{ margin: "30px 0px" }}
            >
              {post.description}
            </Typography>
            <Typography
              variant="h3"
              color="inherit"
              sx={{ margin: "30px 0px" }}
            >
              <Typed
                strings={post.skills}
                typeSpeed={80}
                backSpeed={50}
                loop
              ></Typed>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
