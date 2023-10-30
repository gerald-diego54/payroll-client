import React from "react";
import { Card } from "@mui/material";

interface InfoBoxProps {
  children: string;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <Card
      sx={{ width: "100%", backgroundColor: "#ffff", borderRadius: "0.5rem",padding:"0.7em"}}
    >
      {children}
    </Card>
  );
}
