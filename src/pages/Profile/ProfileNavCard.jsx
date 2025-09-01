import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProfileNavCard = ({ icon, subtitle, description, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        padding: 2,
        borderRadius: 3,
        backgroundColor: "#f1f9f4",
        boxShadow: "none",
        maxWidth: 320,
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        "&:hover": {
          backgroundColor: "#e4f4e8",
        },
      }}
    >
      <Box>
        <Avatar sx={{ bgcolor: "primary.main", marginRight: 2 }}>{icon}</Avatar>

        <Box mt={1}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "600", color: "primary.main" }}
          >
            {subtitle}
          </Typography>
          <Typography variant="body1" color="text.text" fontWeight={500}>
            {description}
          </Typography>
        </Box>
      </Box>

      <IconButton size="small" sx={{ color: "primary.main" }}>
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Card>
  );
};

export default ProfileNavCard;
