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
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, type Variants } from "framer-motion";
import KnowMoreDialog from "../components/KnowMoreDialog";
import jatinImage from "../assets/images/jatinImage.jpg";
import alisherImage from "../assets/images/alisherImage.png";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  portfolioLink?: string;
  detailedDescription?: string;
  image1?: string;
  experience?: string;
  education?: string;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jatin Ramina",
    role: "Project Manager",
    description: "Glavi amet ritnisl libero molestie...",
    image: jatinImage,
    portfolioLink: "",
    detailedDescription: "Long detailed bio about Jatin...",
    image1: jatinImage,
    experience: "5+ years managing cross-functional teams",
    education: "MBA in Project Management",
    facebookLink: "https://facebook.com/jatin.ramina",
    instagramLink: "https://instagram.com/jatin.ramina",
    linkedinLink: "https://linkedin.com/in/jatinramina",
  },
  {
    name: "Alisher Sayed",
    role: "Developer",
    description: "Glavi amet ritnisl libero molestie...",
    image: alisherImage,
    portfolioLink: "https://portfolio-alishers-projects-a4332045.vercel.app ",
    detailedDescription: "Long detailed bio about Ali...",
    image1: alisherImage,
    experience: "2+ years managing cross-functional teams",
    education: "BSC CS in Project Management",
    facebookLink: "",
    instagramLink: "https://instagram.com/alisher.sayed",
    linkedinLink: "https://linkedin.com/in/alishersayed",
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
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
                      setSelectedMember(member);
                      setOpen(true);
                    }}
                  >
                    Know More
                  </Button>

                  {
                    member.portfolioLink !== "" && (
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
                    )
                  }
                </Stack>

                {/* SOCIAL ICONS */}
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  mt={3}
                >
                  {member.facebookLink !== "" && (
                    <IconButton
                      size="small"
                      component="a"
                      href={member.facebookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon fontSize="small" />
                    </IconButton>
                  )}

                  {member.instagramLink !== "" && (
                    <IconButton
                      size="small"
                      component="a"
                      href={member.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon fontSize="small" />
                    </IconButton>
                  )}

                  {member.linkedinLink !== "" && (
                    <IconButton
                      size="small"
                      component="a"
                      href={member.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                  )}
                </Stack>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
      <KnowMoreDialog
        open={open}
        isClose={() => setOpen(false)}
        name={selectedMember?.name}
        image={selectedMember?.image1 || selectedMember?.image}
        description={selectedMember?.detailedDescription}
        experience={selectedMember?.experience}
        education={selectedMember?.education}
      />
    </Container>
  );
};

export default Team;
