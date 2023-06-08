import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import BiotechIcon from "@mui/icons-material/Biotech";

const HeadLineIcon = ({ name }: { name: string | undefined }) => {
  if (name === "Business") {
    return (
      <AssuredWorkloadIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-purple-500"
      />
    );
  } else if (name === "Entertainment") {
    return (
      <TheaterComedyIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-cyan-500"
      />
    );
  } else if (name === "Health") {
    return (
      <MedicationLiquidIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-orange-400"
      />
    );
  } else if (name === "Science") {
    return (
      <BiotechIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-green-400"
      />
    );
  } else if (name === "Sports") {
    return (
      <SportsFootballIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-pink-400"
      />
    );
  } else if (name === "Technology") {
    return (
      <ImportantDevicesIcon
        data-testid={name}
        sx={{ fontSize: 30 }}
        className="m-1 text-blue-900"
      />
    );
  } else {
    return <></>;
  }
};

export default HeadLineIcon;
