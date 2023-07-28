import React from "react";
import { Box, Typography } from "@mui/material";

import { Uploader } from "../../Components/Uploader";
import { useFile } from "../../context/fileContext";
import MapCard from "../../Components/MapCard";

const Home = () => {
  const { file, setFile } = useFile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e: any) => {
      setFile(JSON.parse(e.target.result));
    };
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      {Object.keys(file).length === 0 ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography fontSize={"24px"}>
            There is no data available right now. <br /> Please upload one CAD
            file a time.
          </Typography>
          <Uploader handleChange={handleChange} />
        </Box>
      ) : (
        <Box height="100%" width="450px" padding={10}>
          <MapCard />
        </Box>
      )}
    </Box>
  );
};

export default Home;
