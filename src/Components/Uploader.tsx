import React from "react";
import { Box, Button } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

interface UploaderProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Uploader: React.FC<UploaderProps> = ({ handleChange }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <input
        className="uploader-input"
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          startIcon={<UploadIcon />}
          sx={{ textTransform: "none" }}
        >
          Upload your CAD file...
        </Button>
      </label>
    </Box>
  );
};
