import * as React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };
    const dropMenu = {
      width:"100%",
  }
  return (
    <Box>
      <FormControl variant="outlined" sx={dropMenu}>
        <InputLabel id="dropdown-label">Select an option</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedOption}
          onChange={handleChange}
          label="Select an option"
        >
          <MenuItem value="M-W-F">M-W-F</MenuItem>
          <MenuItem value="REGULAR WEEKDAY">REGULAR WEEKDAY</MenuItem>
          <MenuItem value="NIGHT SHIFT WEEKDAY">NIGHT SHIFT WEEKDAY</MenuItem>
          <MenuItem value="IRREGULAR SHIFT">IRREGULAR SHIFT</MenuItem>
          <MenuItem value="INCOMPLETE">INCOMPLETE</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownMenu;