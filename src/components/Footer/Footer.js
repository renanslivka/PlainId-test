import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <Box p={3}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link href="https://www.linkedin.com/in/renan-slivka" color="inherit">
          Renan Slivka{" "}
        </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
