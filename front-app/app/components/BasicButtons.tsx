import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
  buttonText: string;
}

export default function BasicButtons({ buttonText }: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="column" width="100%">
      <Button variant="contained" fullWidth>
        {buttonText}
      </Button>
    </Stack>
  );
}