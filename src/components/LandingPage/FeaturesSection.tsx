import React from 'react';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Order from '../../assets/landing/Order ahead-rafiki.svg';
import Quality from '../../assets/landing/Product quality-bro.svg';
import FastOrder from '../../assets/landing/Delivery-cuate.svg';
import Security from '../../assets/landing/Security On-rafiki.svg';

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'Fácil de ordenar',
    description: 'Solo se necesitan pocos pasos y tu orden está lista.',
    image: Order,
  },
  {
    title: 'Rápida entrega',
    description: 'Nuestros repartidores siempre llegarán a tiempo.',
    image: FastOrder,
  },
  {
    title: 'La mejor calidad',
    description: 'Nuestra calidad de servicio es la mejor del mercado.',
    image: Quality,
  },
  {
    title: 'Seguro',
    description: 'Nos aseguramos que nuestra aplicación sea robusta con tus datos.',
    image: Security,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ padding: '50px 0', textAlign: 'center' }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: '#51A7F9', fontWeight: 'bold' }}>
          ¿Qué ofrecemos?
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold',color: '#000000' }}>
          Tu delivery favorito.
        </Typography>
        <Grid container spacing={8}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', boxShadow: 'none', border: 'none', padding: 2 }}>
                <CardMedia
                  component="img"
                  image={feature.image}
                  alt={feature.title}
                  sx={{ width: '100%', height: 'auto', marginBottom: 2 }} // Aumenta el tamaño de la imagen
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
