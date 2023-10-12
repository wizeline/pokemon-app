import { Box, CircularProgress } from "@mui/material";

export const Loading = () => (
  <Box
    sx={{
      display: "flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);
