import { Typography, AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      component="nav"
      sx={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        Prominent Edge 911
      </Typography>
    </AppBar>
  );
};

export default Header;
