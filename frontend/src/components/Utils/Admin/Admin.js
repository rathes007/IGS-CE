import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from '@material-ui/core';

export const Admin = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h6"
          noWrap
          sx={{
            mr: 2,
            fontFamily: "Poppins",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Rental House
        </Typography>
      </Box>
      <Box></Box>
    </>
  );
}
