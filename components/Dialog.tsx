import * as React from "react";
import Image from "next/image";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

type dialogData = {
  projectName: string;
  projectDescription: string;
  pid: number;
};

interface DialogProps {
  isOpen: boolean;
  setIsOpen: Function;
  dialogData: dialogData;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    justifyContent: "center",
  },
}));

const MyTypography = styled(Typography)(() => ({
  width: "500px",
}));

export default function Card(props: DialogProps) {
  function handleClose() {
    props.setIsOpen(false);
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.isOpen}
      >
        <DialogTitle id="customized-dialog-title">
          {props.dialogData.projectName}
        </DialogTitle>
        <DialogContent dividers>
          <Image
            src={`/images/project${props.dialogData.pid}.png`}
            alt="project picture"
            width={500}
            height={270}
            loading="lazy"
          />
          <MyTypography gutterBottom>
            {props.dialogData.projectDescription}
          </MyTypography>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
