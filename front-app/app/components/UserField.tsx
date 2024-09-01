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
        width: '100%', // Boxの幅を100%に設定
        margin: '0 auto', // 中央寄せ
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="outlined" fullWidth> {/* fullWidthプロパティを追加 */}
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