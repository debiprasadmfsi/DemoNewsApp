import { Props } from "@/models/app";
import { AppBar, Toolbar} from "@mui/material";

const Header = (props: Props) => {
  return (
    <AppBar position="static" className="bg-white shadow-none p-2">
      <Toolbar variant="dense">
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
