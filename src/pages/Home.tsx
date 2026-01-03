import Hero from "../components/Hero";
import { Container } from "@mui/material";
const Home = () => {
  return (
    <Container id="home" sx={{mt:{ xs: 6, md: 2 }}} maxWidth={false}>
      <Hero />
    </Container>
  );
};

export default Home;
