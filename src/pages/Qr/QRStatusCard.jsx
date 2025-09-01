import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QRCode from "../../components/common/QrCode";

const QRStatusCard = ({
  qrValue,
  name,
  address,
  requestedOn,
  steps = [],
  currentStep = 0,
}) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent sx={{ "&:last-child": { pb: 1 } }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Box
            sx={{
              border: (t) => `1.5px solid ${t.palette.primary.border}`,
              p: 1,
              borderRadius: "8px",
            }}
          >
            <QRCode value={qrValue} size={60} />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="text.primary"
            >
              {name}
            </Typography>
            <Typography variant="body2" fontWeight={500} color="text.primary">
              {address}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Requested on {requestedOn}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            backgroundColor: "#f1f8f3",
            borderRadius: 2,
            px: 2,
            py: 1,
            width: "100%",
            mt: 2,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            onClick={handleToggle}
            sx={{ cursor: "pointer" }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
              <Typography
                fontWeight={600}
                color={theme.palette.primary.main}
                fontSize={16}
              >
                {steps[currentStep]}
              </Typography>
            </Stack>
            <IconButton
              size="small"
              sx={{
                color: theme.palette.primary.main,
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Stack>

          {/* Collapse list of remaining steps */}
          <Collapse in={expanded}>
            <List disablePadding sx={{ mt: 1 }}>
              {steps.map((label, index) => {
                if (index === currentStep) return null; // hide current step
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <RadioButtonUncheckedIcon
                        sx={{ color: theme.palette.text.secondary }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: 14,
                        color: theme.palette.text.secondary,
                      }}
                    />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QRStatusCard;
