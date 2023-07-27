import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumbs, Typography } from "@material-ui/core";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MyBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      style={{ border: "1px solid" }}
      aria-label="breadcrumb"
      separator={<ChevronRightIcon sx={{ height: "20px" }} />}
    >
      <Link
        color="inherit"
        to="/"
        style={{ border: "", textDecoration: "none" }}
      >
        OOS Risk Detection
      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={pathname} color="textPrimary">
            {pathname == "overviewhighrisk" && "Overview High-Risk SKUs"}
            {pathname == "orderinvestigation" && "Order Investigation"}
            {pathname == "airwickelectrical" &&
              "Order Investigation: Airwick Electrical Lemon"}
            {pathname == "scenariogeneration" &&
              "Scenario Generation: Airwick Electrical Lemon"}
          </Typography>
        ) : (
          <Link key={pathname} color="inherit" to={routeTo}>
            {pathname}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;
