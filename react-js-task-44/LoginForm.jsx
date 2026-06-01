import { Box, TextField, Button, Typography } from '@mui/material';

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        fullWidth
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
      >
        Sign In
      </Button>
    </Box>
  );
}

export default LoginForm;