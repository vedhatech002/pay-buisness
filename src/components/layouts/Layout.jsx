import { Box } from "@mui/material";
import Header from "./Header/Header";
import Sidebar, { drawerWidth } from "./SideBar/SideBar";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />

      <Box sx={{ display: "flex", flexGrow: 1, pl: 4, pt: 6, pb: 8 }}>
        <Box
          sx={{
            width: drawerWidth,
            bgcolor: (theme) => theme.palette.primary.main,
            borderRadius: (theme) => theme.shape.borderRadius,
            color: "white",
            boxShadow: 3,
            height: "calc(120vh - 80px)", // subtract header height
            mr: 2,
          }}
        >
          <Sidebar />
        </Box>

        {/* Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 2,
            px: 1,
            height: "calc(120vh - 80px)",
            overflowY: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
