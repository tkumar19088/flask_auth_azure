import React from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import "./Commingsoon.css";
const ComingSoonButton = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Badge
        badgeContent="Coming Soon"
        className="vertical-badge"
      >
        <Button variant="contained">Click Me</Button>
      </Badge>
    </div>
  );
};

export default ComingSoonButton;
