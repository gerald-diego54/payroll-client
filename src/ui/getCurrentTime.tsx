import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const CurrentTime = () => {
  const [formattedTime, setFormattedTime] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchCurrentTime = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();
    setFormattedTime(formattedTime);
    setButtonClicked(true);
  };

  const showButton = !buttonClicked; // Show the button when buttonClicked is false

  return (
    <Box sx={{width:"10",}}>
      {buttonClicked ? (
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setButtonClicked(false); // Reset the buttonClicked state
            }}
          >
            Show Current Time Again
          </Button>
          <Box mt={2}>
            Current Time: {formattedTime}
          </Box>
        </Box>
      ) : showButton ? (
        <Button variant="contained" color="primary" onClick={fetchCurrentTime}>
          Get Current Time
        </Button>
      ) : null}
    </Box>
  );
};

export default CurrentTime;
