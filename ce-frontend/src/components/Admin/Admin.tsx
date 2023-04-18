import React from "react";
import Box from "@mui/material/Box";
import { MenuItem, Typography, useTheme } from "@material-ui/core";
import { Avatar, Button, Chip, Divider, Grid, Stack, TextField } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

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
            height: "54px",
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
          margin: "30px auto",
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
            width: "88px",
            "&:hover": {
              backgroundColor: theme.palette.secondary.main,
            },
            boxShadow: `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`,
            margin: "12px",
            borderRadius: "12px",
            fontFamily: "Poppins",
            fontSize: "12px",
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
            height: "54px",
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
          alignItems: "center",
          justifyContent: "flex-start",
          margin: "30px auto",
          width: "87%",
          // backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map((card) => (
            <Grid item key={card} xs={3}>
              <Paper
                sx={{
                  m: 2,
                  borderRadius: "12px",
                  flexDirection: "column",
                  display: "flex",
                  alignItems: "flex-start",
                  width: "250px",
                  height: "280px",
                  marginLeft: "30px",
                }}
              >
                <img
                  src="https://assets.website-files.com/6193ce0889184df85cd96c91/61953a33476cd4f4b3161c1c_image-thumbnail-6-property-posts-realtor-template-p-500.jpeg"
                  alt="Your Image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "250px",
                    borderTopRightRadius: "12px",
                    borderTopLeftRadius: "12px",
                    verticalAlign: "top",
                  }}
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: 20,
                    marginLeft: 20,
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.10000000149011612px",
                    textAlign: "left",
                  }}
                >
                  Casagrande Apple Park
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: 20,
                    fontFamily: "Poppins",
                    fontSize: "smaller",
                    fontWeight: 500,
                    lineHeight: "24px",
                    letterSpacing: "0.10000000149011612px",
                    textAlign: "left",
                    opacity: "40%",
                  }}
                >
                  <FmdGoodOutlinedIcon sx={{ mr: 1, fontSize: "small" }} />
                  Arcot Road, Vadapalani.
                </Typography>

                <Divider
                  variant="middle"
                  sx={{ width: "200px", marginTop: "15px" }}
                />
                <Stack direction="row" spacing={1}>
                  <Chip
                    sx={{ color: theme.palette.info.main,  backgroundColor: theme.palette.primary.main }}
                    icon={<HomeOutlinedIcon sx={{ color: "#FFFFFFF" }} />}
                    label="121"
                    variant="outlined"
                  />
                  <Chip
                    icon={<Groups2OutlinedIcon />}
                    label="100"
                    variant="outlined"
                  />
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
