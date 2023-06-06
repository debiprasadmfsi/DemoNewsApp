import { Link, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const SettingsHeader = () => {
  return (
    <Typography variant="h6" color="black" component="div">
      <Link href="/" ><ArrowBackIcon color="primary" sx={{ fontSize: 30 }} /></Link>
      <span className="mx-2">Settings</span>
    </Typography>
  );
};

export default SettingsHeader;
