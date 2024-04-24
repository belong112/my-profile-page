import * as React from "react";
import { useStore } from "@/stores";

import { styled } from "@mui/material/styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ThumbBox = styled("div")(() => ({
  position: "absolute",
  bottom: "0px",
  right: "10px",
  display: "flex",
  margin: "20px",
}));

const StyledThumb = styled(ThumbUpIcon)(() => ({
  fontSize: "40px",
  marginRight: "10px",

  "&:hover": {
    color: "#346ad2",
  },
}));

export default function Thumb() {
  const thumbs = useStore((state) => state.thumbs);
  const increaseThumb = useStore((state) => state.increaseThumb);

  return (
    <React.Fragment>
      <ThumbBox onClick={increaseThumb}>
        <StyledThumb />
        <p>{thumbs}</p>
      </ThumbBox>
    </React.Fragment>
  );
}
