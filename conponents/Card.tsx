import * as React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";

interface CardProps {
  projectPic: any;
  projectName: string;
}

export default function Card(props: CardProps) {
  return (
    <React.Fragment>
      <Typography component="h5" color="inherit" gutterBottom>
        {props.projectName}
      </Typography>
      <Image
        src={props.projectPic}
        alt="project picture"
        width={330}
        loading="lazy"
      />
    </React.Fragment>
  );
}
