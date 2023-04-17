import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Typography, useTheme } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Admin = () => {
  const theme = useTheme();
  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];
  return (
    <>
      <Box
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "none",
            outline: "none",
            borderRadius: "12px",
            height: "59px",
            boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            backgroundColor: "#F6F6F6",
          },
          "& .MuiTextField-root": {
            backgroundColor: "#F6F6F6",
            width: "30ch",
          },
          display: "flex",
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "20px auto",
          width: "92%",
        }}
      >
        <Typography
          variant="h6"
          style={{
            marginRight: 2,
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Properties
        </Typography>
        <Button
          sx={{
            height: "31px",
            width: "91px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
            margin: "12px",
            borderRadius: "12px",
            fontFamily: "Poppins",
            textTransform: "none",
            color: theme.palette.info.main,
            backgroundColor: theme.palette.secondary.main,
          }}
          startIcon={<AddOutlinedIcon />}
        >
          ADD
        </Button>
        <Paper
          component="form"
          sx={{
            borderRadius: "12px",
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
            marginLeft: "30px",
            backgroundColor: "#F6F6F6",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
          <Button
            sx={{
              height: "31px",
              width: "91px",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
              },
              boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
              margin: "12px",
              borderRadius: "12px",
              fontFamily: "Poppins",
              textTransform: "none",
              color: theme.palette.info.main,
              backgroundColor: theme.palette.primary.main,
            }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Paper>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FmdGoodOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginLeft: "30px" }}
          id="outlined-select-currency"
          select
          defaultValue="USD"
          label="Location"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeOutlinedIcon />
              </InputAdornment>
            ),
          }}
          sx={{ marginLeft: "30px" }}
          id="outlined-select-currency"
          select
          defaultValue="USD"
          label="Property"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: 60,
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "20px auto",
          width: "92%",
          backgroundColor: theme.palette.secondary.main,
        }}
      >

        
      </Box>
    </>
  );
};
