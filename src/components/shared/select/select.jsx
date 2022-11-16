import { memo } from 'react';
import { Select as MSelect, InputLabel, MenuItem, FormControl } from '@mui/material';

import useStyles from './styles';

const Select = ({ items, selectedValue, onChange }) => {
  const { classes } = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth className={classes.container}>
      <InputLabel id="select-collection">Collections</InputLabel>
      <MSelect
        labelId="select-collection"
        id="demo-simple-select"
        value={selectedValue}
        label="Collections"
        onChange={handleChange}
      >
        {items?.map((item) => (
          <MenuItem key={`key_${item.id}`} value={item.id}>
            {item.value}
          </MenuItem>
        ))}
      </MSelect>
    </FormControl>
  );
};

export default memo(Select);
