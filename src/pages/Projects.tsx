import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import staticSystem from "../assets/icons/staticSystem.png";
import dashboardSystem from "../assets/icons/dashboardSystem.png";
import erpSystem from "../assets/icons/erpSystem.png";
import mobileappSystem from "../assets/icons/mobileappSystem.png";

const services = [
  {
    title: "Static Projects",
    description:
      "High-performance static websites, portfolios, and landing pages built with modern frameworks.",
    icon: staticSystem,
  },
  {
    title: "ERP Systems",
    description:
      "Custom ERP solutions to manage operations, inventory, billing, and internal workflows.",
    icon: erpSystem,
  },
  {
    title: "Customized Dashboards",
    description:
      "Interactive dashboards with analytics, role-based access, and real-time insights.",
    icon: dashboardSystem,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications focused on performance, usability, and scale.",
    icon: mobileappSystem,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Container
      id="projects"
      maxWidth="lg"
      ref={sectionRef}
      sx={{ py: 8, scrollMarginTop: { xs: "66px", md: "12px"} }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 2,
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            What we build?
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

        <Typography color="text.secondary" maxWidth={620} mb={6}>
          Our scope covers a wide range of digital products — from fast static
          sites to complex enterprise systems and mobile applications.
        </Typography>
      </motion.div>

      <Grid container spacing={4} alignItems="stretch">
        {services.map((service, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }} sx={{ display: "flex" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 }
              }
              transition={{
                duration: 0.5,
                delay: inView ? index * 0.12 : 0,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 3,
                  overflow: "hidden",

                  transition: "transform 0.25s ease, box-shadow 0.25s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 14px 32px rgba(0,0,0,0.12)",
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    height: "52%",
                    backgroundImage: "linear-gradient(135deg, #111827, #374151, #111827)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "0% 50%",
                    clipPath: "polygon(0 0, 100% 0, 100% 78%, 0 100%)",
                    transition: "background-position 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 0,
                  },

                  "&:hover::before": {
                    backgroundPosition: "100% 50%",
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    p: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      minHeight: 72,
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
                      }}
                    >
                      <Box
                        component="img"
                        src={service.icon}
                        alt={service.title}
                        sx={{
                          width: 40,
                          height: 40,
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      fontWeight={700}
                      sx={{
                        color: "#ffffff",
                        lineHeight: 1.3,
                        letterSpacing: 0.3,
                        wordBreak: "break-word",
                      }}
                    >
                      {service.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{
                      mt: 4,
                      lineHeight: 1.6,
                      fontSize: "0.9rem",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>

            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
