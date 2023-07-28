import React from "react";
import { Box, Typography } from "@mui/material";

interface DescriptionDetailProps {
  label: string;
  detail?: string | number | null;
}

const DescriptionDetail: React.FC<DescriptionDetailProps> = ({
  label,
  detail,
}) => {
  return (
    <Box mt={2}>
      <Typography fontWeight={700}>{label}</Typography>
      <Typography fontSize={"0.75rem"}>{detail}</Typography>
    </Box>
  );
};

export default DescriptionDetail;
