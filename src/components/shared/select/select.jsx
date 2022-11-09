import React, { useState } from 'react';
import { Select as MSelect, InputLabel, MenuItem, FormControl } from '@mui/material';

import useStyles from './styles';

const Select = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { classes } = useStyles();

  return (
    <FormControl fullWidth className={classes.container}>
      <InputLabel id="select-collection">Collections</InputLabel>
      <MSelect
        labelId="select-collection"
        id="demo-simple-select"
        value={age}
        label="Collections"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MSelect>
    </FormControl>
  );
};

export default Select;
