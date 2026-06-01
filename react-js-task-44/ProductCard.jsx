import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

function ProductCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        title="Wireless Headphones"
        subheader="$99.99"
      />

      <CardContent>
        <Typography variant="body2">
          Premium wireless headphones with noise cancellation.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">
          Details
        </Button>

        <Button variant="contained">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;