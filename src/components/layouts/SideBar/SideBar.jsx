import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "../../../assets/home.svg?react";
import QrCodeIcon from "../../../assets/qr.svg?react";
import HistoryIcon from "../../../assets/history.svg?react";
import PersonIcon from "../../../assets/profile.svg?react";
import BharatConnectLogo from "../../../assets/bharat_connect.svg";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 220;

const menuItems = [
  { label: "Home", icon: <HomeIcon />, path: "/" },
  { label: "QR", icon: <QrCodeIcon />, path: "/qr" },
  { label: "History", icon: <HistoryIcon />, path: "/history" },
  { label: "Profile", icon: <PersonIcon />, path: "/profile" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <List sx={{ px: 2, py: 2 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItemButton
              disableRipple
              disableTouchRipple
              component={Link}
              to={item.path}
              key={item.label}
              sx={{
                borderRadius: 2,
                mb: 1,
                px: 2,
                gap: 1.5,
                justifyContent: "flex-start",
                bgcolor: isActive ? "white" : "transparent",

                "& .MuiListItemIcon-root, & .MuiListItemText-root": {
                  color: isActive
                    ? (theme) => theme.palette.primary.main
                    : (theme) => theme.palette.text.secondary,
                },

                "&:hover": {
                  bgcolor: isActive ? "white" : "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  transition: "color 0.2s ease-in-out",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s ease-in-out",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      {/* Footer Logo */}
      <Box
        sx={{
          mt: "auto",
          textAlign: "center",
          bgcolor: "white",
          border: (theme) => `1px solid ${theme.palette.primary.main}`,
          borderRadius: "0 0 12px 12px",
          p: 1,
        }}
      >
        <img src={BharatConnectLogo} alt="Bharat Connect" />
      </Box>
    </Box>
  );
}

export { drawerWidth };
