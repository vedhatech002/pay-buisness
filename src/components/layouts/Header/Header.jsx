import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../../../assets/logo.svg?react";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: (theme) => theme.shadows.header,
        px: 4,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 70 }}>
        <Box display="flex" alignItems="center">
          <Logo title="Pay Buisness" role="img" />
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
}
