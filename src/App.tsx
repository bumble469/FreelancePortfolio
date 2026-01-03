import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Projects from "./pages/Projects";
import Motive from "./pages/Motive";
import "./App.css"

const App = () => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flexGrow={1}>
        <Home />
        <Team />
        <Projects />
        <Motive />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
