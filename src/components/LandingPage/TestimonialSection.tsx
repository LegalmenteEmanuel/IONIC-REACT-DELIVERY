import React from "react";
import { Container, Typography, Box, Grid } from "@mui/material";
import TestimonialsImage from "../../assets/landing/Status update-amico.svg";

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Excelente servicio y comida deliciosa!",
    author: "Francisco Jaramillo",
  },
  {
    quote: "Rápido y confiable, lo mejor!",
    author: "Maria Gomez",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#51A7F9", fontWeight: "bold" }}
        >
          ¿Qué dicen los usuarios acerca de nosotros?
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={TestimonialsImage}
              alt="Testimonials"
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            {testimonials.map((testimonial, index) => (
              <Box key={index} sx={{ marginTop: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ fontStyle: "italic", color: "#000000" }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    color: "#000000",
                  }}
                >
                  - {testimonial.author}
                </Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
