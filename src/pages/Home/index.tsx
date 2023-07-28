import React from "react";
import { Box, Typography } from "@mui/material";

import { Uploader } from "../../Components/Uploader";
import { useFile } from "../../context/fileContext";
import MapCard from "../../Components/MapCard";
import DescriptionWrappr from "../../Components/DescriptionWrapper";

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
        boxSizing: "border-box",
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
          <Typography fontSize={"24px"} data-testid="no-data-text">
            There is no data available right now. <br /> Please upload one CAD
            file a time.
          </Typography>
          <Box mt={4}>
            <Uploader handleChange={handleChange} />
          </Box>
        </Box>
      ) : (
        <Box height="100%" width="100%" padding={10} sx={{ display: "flex" }}>
          <Box>
            <MapCard />
          </Box>
          <Box ml={4}>
            <DescriptionWrappr data={file} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
