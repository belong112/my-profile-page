import * as React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";

export default function Header() {
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link href="/">昱禎的暫存空間</Link>
          </Typography>
          <nav>
            <Typography sx={{ display: "inline", mx: 3, my: 0.5 }}>
              <Link href="/profile">個人經歷</Link>
            </Typography>
            <Typography sx={{ display: "inline", mx: 3, my: 0.5 }}>
              <Link href="/projects">專案製作</Link>
            </Typography>
            <Typography sx={{ display: "inline", mx: 3, my: 0.5 }}>
              <Link href="/contact">聯絡我！</Link>
            </Typography>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
