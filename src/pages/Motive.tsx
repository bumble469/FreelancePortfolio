import {
  Container,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

import motiveImage1 from "../assets/images/motive1.jpg";
import motiveImage2 from "../assets/images/motive2.jpg";

const Motive = () => {
  return (
    <Container id="motive" maxWidth="lg" sx={{ py: 8, scrollMarginTop: { xs: "66px", md: "12px"} }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 6,
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            Our Motive
          </Typography>

          <Box
            sx={{
              mt: "18px",
              flexGrow: 1,
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.25)",
              borderRadius: "2px",
            }}
          />
        </Box>
      </motion.div>

      <Grid container spacing={6} alignItems="center">
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 420,
              mx: "auto",
            }}
          >
            <motion.img
              src={motiveImage1}
              alt="Our journey"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, x: -50, y: -20 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: "70%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
              }}
            />

            <motion.img
              src={motiveImage2}
              alt="Our vision"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, x: 40, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: "70%",
                aspectRatio: "4 / 3",
                objectFit: "cover",
                borderRadius: "16px",
                boxShadow: "0 16px 36px rgba(0,0,0,0.14)",
                position: "absolute",
                top: "42%",
                left: "42%",
              }}
            />
          </Box>
        </Grid>

        {/* RIGHT: TEXT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Driven by quality, curiosity, and craftsmanship
            </Typography>

            <Divider
              sx={{
                width: 80,
                height: 3,
                backgroundColor: "primary.main",
                borderRadius: 2,
                mb: 3,
              }}
            />

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 2 }}
            >
              Our aim is to use our skills and experience to deliver
              high-quality digital products that are built with purpose,
              precision, and care. We focus on creating solutions that are
              reliable, scalable, and thoughtfully designed.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              As a growing freelancing group, we strive to create something
              meaningful of our own while continuously learning and improving.
              We believe growth comes from curiosity, experimentation, and a
              commitment to never stop refining our craft.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Motive;
