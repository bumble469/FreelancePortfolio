import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  IconButton,
  Button
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, type Variants } from "framer-motion";

const teamMembers = [
  {
    name: "Jatin Ramina",
    role: "Project Manager",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet ipsum lorem bibendum.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    portfolioLink: "https://portfolio-jatin.dev",
  },
  {
    name: "Ann Richmond",
    role: "Creative Leader",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet ipsum lorem bibendum.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    portfolioLink: "https://annrichmond.design",
  },
  {
    name: "Bob Greenfield",
    role: "Programming Guru",
    description:
      "Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavid from dolor amet ipsum lorem bibendum.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    portfolioLink: "https://bobcodes.dev",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Team = () => {

  return (
    <Container id="team" maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.6 }}
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
            Our Team
          </Typography>

          <Box
            sx={{
              marginTop: '20px',
              flexGrow: 1,
              height: "2px",
              backgroundColor: "rgba(0,0,0,0.25)",
              borderRadius: "2px",
            }}
          />
        </Box>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          gap: 6,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pb: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            style={{ flexShrink: 0 }}
          >
            <Card
              sx={{
                maxWidth: 400,
                scrollSnapAlign: "start",
                backgroundColor: "#f5f5f5",
                borderRadius: 0,
                boxShadow: "none",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                },
              }}
            >
              <Box
                component="img"
                loading="lazy"
                decoding="async"
                src={member.image}
                alt={member.name}
                sx={{
                  width: "100%",
                  height: 280,
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                  transition: "filter 0.4s ease",
                  "&:hover": {
                    filter: "grayscale(0%)",
                  },
                }}
              />

              <CardContent sx={{ textAlign: "center", px: 3, py: 4 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  letterSpacing={1}
                >
                  {member.name.toUpperCase()}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#84cc16",
                    fontWeight: 600,
                    mt: 0.5,
                  }}
                >
                  {member.role.toLowerCase()}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  mt={2}
                  sx={{ lineHeight: 1.6 }}
                >
                  {member.description}
                </Typography>

                {/* ACTION BUTTONS */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  mt={3}
                >
                  {/* KNOW MORE */}
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      borderRadius: "999px",
                      px: 2.5,
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      console.log("Know more about", member.name);
                    }}
                  >
                    Know More
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    component="a"
                    href={member.portfolioLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textTransform: "none",
                      borderRadius: "999px",
                      px: 2.5,
                      fontWeight: 600,
                      backgroundColor: "#84cc16",
                      "&:hover": {
                        backgroundColor: "#65a30d",
                      },
                    }}
                  >
                    Portfolio
                  </Button>
                </Stack>

                {/* SOCIAL ICONS */}
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={3}
                >
                  <IconButton size="small">
                    <FacebookIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <TwitterIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Team;
