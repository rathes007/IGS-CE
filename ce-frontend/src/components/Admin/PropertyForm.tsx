import { Avatar, Typography } from "@material-ui/core";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTheme } from "@material-ui/core";
import React from "react";


const PropertyForm = () => {
  const theme = useTheme();

  return (

    
    <>
    <Avatar style= {{ backgroundColor:theme.palette.secondary.main, width: 56, height: 56, marginLeft: "380px", marginTop: "100px" }}>
        <HomeOutlinedIcon style= {{ color:theme.palette.primary.main, width: 45, height: 45 }} />
    </Avatar>
    <Typography
          variant="h6"
          style={{
            marginRight: 2,
            fontFamily: "Poppins",
            fontWeight: "500",
            color: "inherit",
            textDecoration: "none",
            marginLeft: "305px",
            marginTop: "10px"
          }}
        >
          Property Information
        </Typography>
    </>
  )
}

export default PropertyForm