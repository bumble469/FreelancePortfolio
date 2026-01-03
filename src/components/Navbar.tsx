import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";

const text = "WebsiteName";

const navLinks = [
  { text: "Home", to: "home" },
  { text: "Our Team", to: "team" },
  { text: "What we build", to: "projects" },
  { text: "Motive", to: "motive" },
];

const Navbar = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [activeLink, setActiveLink] = useState<string>("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Typewriter effect
  useEffect(() => {
    if (index < text.length) {
      const t = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [index]);

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background:
            "linear-gradient(90deg, #f7f7f7ff 0%, #ecececff 50%, #e0e0e0ff 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={4} alignItems="center">
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                letterSpacing: 1,
                fontFamily: "DevAddict",
                color: "#111827",
              }}
            >
              {displayText}
              <Box component="span" sx={{ ml: 0.5, animation: "blink 1s infinite" }}>
                |
              </Box>
            </Typography>

            {!isMobile && (
              <Stack direction="row" spacing={6}>
                {navLinks.map((link) => (
                  <Typography
                    key={link.to}
                    onClick={() => handleNavClick(link.to)}
                    sx={{
                      cursor: "pointer",
                      fontWeight: activeLink === link.to ? 700 : 500,
                      color:
                        activeLink === link.to
                          ? "primary.main"
                          : "#374151",
                      borderBottom: "2px solid",
                      borderColor:
                        activeLink === link.to
                          ? "primary.main"
                          : "transparent",
                      transition: "0.2s",
                    }}
                  >
                    {link.text}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>

          {!isMobile ? (
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<MailOutlineIcon />}
                sx={{
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  fontWeight: 600,
                  color: "#111827",
                  boxShadow: "0 12px 32px rgba(207, 206, 206, 0.9)",
                  backgroundImage: "linear-gradient(135deg, #ffffff, #f3f4f6, #ffffff)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",
                  border: "1px solid rgba(0,0,0,0.15)",
                  transition: "background-position 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, transform 0.35s ease",
                  "&:hover": {
                    backgroundPosition: "100% 50%",
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                Contact
              </Button>


              <Button
                variant="contained"
                startIcon={<WorkOutlineIcon />}
                sx={{
                  px: 3.5,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                  backgroundImage: "linear-gradient(135deg, #111827, #374151, #111827)",
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",
                  color: "#fff",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                  transition: "background-position 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, transform 0.35s ease",
                  "&:hover": {
                    backgroundPosition: "100% 50%",
                    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Order a Project
              </Button>
            </Stack>
          ) : (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 260, p: 3 }}>
          <Stack spacing={3}>
            {navLinks.map((link) => (
              <Typography
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                sx={{
                  fontWeight: activeLink === link.to ? 700 : 500,
                  cursor: "pointer",
                }}
              >
                {link.text}
              </Typography>
            ))}

            <Button
              variant="outlined"
              startIcon={<MailOutlineIcon />}
              fullWidth
            >
              Contact
            </Button>

            <Button
              variant="contained"
              startIcon={<WorkOutlineIcon />}
              fullWidth
            >
              Order a Project
            </Button>
          </Stack>
        </Box>
      </Drawer>

      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1 }
            25%, 75% { opacity: 0 }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
