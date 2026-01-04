import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import developerHero from "../assets/developer.json";

const Hero = () => {
  return (
    <Box minHeight="80vh" display="flex" alignItems="center" px={4}>
      <Box maxWidth="lg" mx="auto" width="100%">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography variant="h2" fontWeight={700}>
                We build modern products
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                mt={1.5}
                sx={{
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontSize: "0.85rem",
                  background:
                    "linear-gradient(90deg, #6366F1, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Analyze · Architect · Build
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography mt={2} maxWidth={600} color="text.secondary">
                A team focused on scalable, fast, and clean digital solutions.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Typography
                mt={2}
                maxWidth={620}
                color="text.secondary"
                sx={{ lineHeight: 1.7, textAlign: 'justify' }}
              >
                We are a small freelancing group helping startups, businesses, and
                individuals turn ideas into reliable digital products. From fast
                static websites to scalable dashboards and applications, we focus
                on clean code, performance, and long-term maintainability.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button
                variant="contained"
                size="large"
                disableElevation
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.5,

                  backgroundImage:
                    "linear-gradient(135deg, #6366F1, #8B5CF6, #6366F1)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",

                  color: "#fff",
                  borderRadius: "999px",
                  textTransform: "none",
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.35)",

                  transition:
                    "background-position 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, transform 0.35s ease",

                  "&:hover": {
                    backgroundPosition: "100% 50%",
                    boxShadow: "0 14px 36px rgba(99, 102, 241, 0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Get Started
              </Button>

            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }} sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            justifyContent: "center",
          }}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ width: "100%", maxWidth: 520 }}
            >
              <Lottie animationData={developerHero} loop />
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
