import * as React from "react";
import Image from "next/image";

import Typography from "@mui/material/Typography";

interface CardProps {
  projectId: string;
  projectName: string;
  projectDescription: string;
  clickCard: any; // 暫時處理，需再研究
}

export default function Card(props: CardProps) {
  return (
    <React.Fragment>
      <div onClick={props.clickCard}>
        <Typography component="h5" color="inherit" gutterBottom>
          {props.projectName}
        </Typography>
        <Image
          src={`/images/project${props.projectId}.png`}
          alt="project picture"
          width={330}
          height={180}
          loading="lazy"
        />
      </div>
    </React.Fragment>
  );
}
