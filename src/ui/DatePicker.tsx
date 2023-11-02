import * as React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Box } from '@mui/material';

// const centerAlign = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
    
// };
  
const BasicDatePicker = () => {
    return ( 
        <Box>
       <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker label="Date" />
        </LocalizationProvider>
      </Box>
    );
};

export default BasicDatePicker;
//You can delete the centerAlign, and Box and leave only 
/*  
        The First Version is this

        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker label="Date" />
        </LocalizationProvider>
        
        
        */