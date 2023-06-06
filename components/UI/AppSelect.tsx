import { AppSelectProps } from "@/models/app";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { uuid } from "uuidv4";

const AppSelect = ({list, selected, selectionChange}: AppSelectProps) => {
 
  const handleChange = (event: SelectChangeEvent) => {
    selectionChange(event.target.value as string);
  };

  return (
    <FormControl className="ml-auto w-1/2" variant="standard">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selected}
        label="Age"
        inputProps={{ 'aria-label': 'Without label' }}
        color="primary"
        onChange={handleChange}
      >
        {list.map((item) => <MenuItem key={uuid()} value={item.value}>{item.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
};


export default AppSelect;