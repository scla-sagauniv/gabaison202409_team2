import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';


interface UserFieldProps {
  label: string;
  defaultValue?: string;
}

export default function ComposedTextField({ label, defaultValue }: UserFieldProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">{label}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue={defaultValue}
          label={label}
        />
      </FormControl>
    </Box>
  );
}