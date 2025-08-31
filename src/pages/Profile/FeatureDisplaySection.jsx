// components/FeatureDisplaySection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const FeatureDisplaySection = ({ title, items }) => {
  return (
    <Box
      sx={{
        border: "1px solid #eee",
        borderRadius: 4,
        padding: 2,
        backgroundColor: "#fff",
        minWidth: 260,
        marginBottom: 3,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: "text.text",
          fontWeight: 500,
          fontSize: 14,
          //   textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: 28, color: "#2e7d32" }}>{item.icon}</Box>
            <Typography
              variant="caption"
              align="center"
              sx={{
                marginTop: 1,
                color: "text.main",
                fontSize: 16,
                fontWeight: 500,
                wordBreak: "break-word",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {item.label
                .split(" ")
                .slice(0, 2)
                .map((word, idx) => (
                  <span key={idx}>{word}</span>
                ))}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureDisplaySection;
