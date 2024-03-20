import Image from "next/image";
import Container from "@mui/material/Container";
import Header from "../conponents/Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import profilePic from "../public/images/profile-pic.jpg";
import Typography from "@mui/material/Typography";

export default function Projects() {
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
                我叫邱昱禎，大學為電機資訊專業，縝密的邏輯思維和解
                決問題的能力是我的強項。半年的企業工作經驗讓我對網
                頁技術有更全面的了解。兩年的現場教學經驗讓我培養系
                統思考的能力，使我能看見問題的結構，分析自己的位
                置，並嘗試解決。期許自己持續精進各項能力，用自己的
                專業協助公司解決問題、一同成長。
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pd: 6 }}>
            <Grid item md={12}>
              <Typography variant="h4">我的技能樹</Typography>
            </Grid>
            <Grid container spacing={2} item md={12}>
              <Grid item md={4}>
                <Box sx={{ p: 1, minHeight: "250px" }}>
                  <Typography variant="h5" gutterBottom>
                    Front End
                  </Typography>
                  <Box sx={{ pl: 1 }}>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Html / Css / JavaScript
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - React.js
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Vue.js
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Vite
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - SCSS / Tailwind
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ p: 1, minHeight: "250px" }}>
                  <Typography variant="h5" gutterBottom>
                    Back End
                  </Typography>
                  <Box sx={{ pl: 1 }}>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Python
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Node.js
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - RESTful api
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box sx={{ p: 1, minHeight: "250px" }}>
                  <Typography variant="h5" gutterBottom>
                    Other
                  </Typography>
                  <Box sx={{ pl: 1 }}>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Git
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - React Testing Librbay / Vitest
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: "20px" }}
                    >
                      - Jenkins
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </main>
      </Container>
    </>
  );
}
