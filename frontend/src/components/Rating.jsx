import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Stars = () => {

    const [value, setValue] = React.useState(5);

  return (
        <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      />
    </Box>
  );
};

export default Stars;
