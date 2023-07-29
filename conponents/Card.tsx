import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Image from "next/image";
import Typography from "@mui/material/Typography";

interface CardProps {
  projectId: string;
  projectName: string;
  projectDescription: string;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    justifyContent: "center",
  },
}));

export default function Card(props: CardProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">
          {props.projectName}
        </DialogTitle>
        <DialogContent dividers>
          <Image
            src={`/images/project${props.projectId}.png`}
            alt="project picture"
            width={500}
            height={270}
            loading="lazy"
          />
          <Typography gutterBottom>{props.projectDescription}</Typography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
