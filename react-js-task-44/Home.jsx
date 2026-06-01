import { Container, Stack } from '@mui/material';
import LoginForm from '../components/LoginForm';
import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <Container maxWidth="md">
      <Stack spacing={4} sx={{ mt: 4 }}>
        <LoginForm />
        <ProductCard />
      </Stack>
    </Container>
  );
}

export default Home;