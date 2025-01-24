import * as MuiIcons from "@mui/icons-material";
import { Box } from "@mui/material";

export default function DynamicIcon({ iconName, size = 40, color = "secondary" }) {
  const IconComponent = MuiIcons[iconName];
  if (!IconComponent) {
    return null;
  }
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <IconComponent sx={{ fontSize: size, color: color }} />
    </Box>
  );
}
