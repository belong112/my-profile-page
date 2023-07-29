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
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          My Profile
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
            <Typography variant="h6" color="inherit">
              我叫邱昱禎，大學為電機資訊專業，縝密的邏輯思維和解決問題的能力是我的強項。
              近兩年的現場教學經驗讓我培養系統思考的能力，我能看見問題的結構，
              分析自己的位置，並嘗試解決。同時在發展領導力的過程回應在意的社會議題。
              期許自己能在未來持續精進各項能力，並持續用自己的專業回應教育不平等的問題。
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ pd: 6 }}>
          <Grid item md={12}>
            <Typography variant="h4">我的技能樹</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
