import { memo } from 'react';
import { Select as MSelect, InputLabel, MenuItem, FormControl } from '@mui/material';

import useStyles from './styles';

const Select = ({ label = 'Collections', items, selectedValue, onChange }) => {
  const { classes } = useStyles();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth className={classes.container}>
      <InputLabel id="select">{label}</InputLabel>
      <MSelect labelId="select" value={selectedValue} label={label} onChange={handleChange}>
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
