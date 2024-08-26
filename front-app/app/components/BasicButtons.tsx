import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
  buttonText: string;
}

export default function BasicButtons({ buttonText }: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">{buttonText}</Button>
    </Stack>
  );
}