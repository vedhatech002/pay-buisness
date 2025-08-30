import { Avatar, Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProfileMenu({
  name = "Thomas Shelby",
  avatarSrc = "",
}) {
  return (
    <Box display="flex" alignItems="center" gap={1.5}>
      <Avatar alt={name} src={avatarSrc} sx={{ width: 40, height: 40 }} />
      <Box textAlign="left">
        <Typography variant="caption" color="text.secondary">
          Hello
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          {name}
        </Typography>
      </Box>
      <IconButton size="small">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Box>
  );
}
