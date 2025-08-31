// src/components/CustomTabs.js
import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { Padding } from "@mui/icons-material";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  width: "100%",
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent", // hide default indicator
  },
  "& .MuiTabs-flexContainer": {
    display: "flex",
    width: "100%",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    Padding: 2,
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    flex: 1, // 👈 make all tabs equal width
    textTransform: theme.typography.button.textTransform,
    minHeight: 40,
    borderRadius: 0, // handled by container
    padding: "6px 14px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.primary,
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-selected": {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main, // 👈 like contained button
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

export default function CustomTabs({ tabs = [], value, onChange }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        p: 1,
      }}
    >
      <StyledTabs
        value={value}
        onChange={onChange}
        variant="fullWidth" // 👈 make it full width
      >
        {tabs.map((tab, index) => (
          <StyledTab key={index} label={tab.label} />
        ))}
      </StyledTabs>
    </Box>
  );
}
