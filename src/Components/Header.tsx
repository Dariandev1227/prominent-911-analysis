import { Typography, AppBar } from "@mui/material";

import { Uploader } from "./Uploader";
import { useFile } from "../context/fileContext";
import { FileType } from "../types";

const Header = () => {
  const { file, setFile } = useFile();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile({} as FileType);
    if (!e.target.files) return;
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e: any) => {
      setFile(JSON.parse(e.target.result));
    };
  };
  return (
    <AppBar
      component="nav"
      sx={{
        height: "60px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "24px",
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        Prominent Edge 911
      </Typography>
      {Object.keys(file).length > 0 && <Uploader handleChange={handleChange} />}
    </AppBar>
  );
};

export default Header;
