import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";

const YearDropdown = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const years = Array.from(
    { length: 10 },
    (_, index) => new Date().getFullYear() - index
  );

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedYear(event.target.value);
  };

  const yearBox = {
    width: "25%",
    padding: 1,
    marginLeft: 0,
    backgroundColor: "#fff",
    borderRadius: "10px",
    
  };

  return (
    <Box sx={yearBox}>
      <FormControl fullWidth>
        <InputLabel htmlFor="year-select">Year</InputLabel>
        <Select
          value={selectedYear}
          onChange={handleChange}
          label="Year"
          inputProps={{
            id: "year-select",
          }}
        >
          {years.map(year => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default YearDropdown;
