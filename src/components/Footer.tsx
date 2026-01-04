import { Box, Typography, Stack, Divider } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        background: "linear-gradient(180deg, #fafafa 0%, #f1f1f1 100%)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <Box maxWidth="lg" mx="auto" px={3} py={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Stack spacing={2} maxWidth={360}>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ fontFamily: "TitleFont", color: "#111827" }}
            >
              SysKraft
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Building modern web products with clarity, performance,
              and scalability.
            </Typography>
          </Stack>

          <Stack spacing={1.5} textAlign={{ xs: "left", sm: "right" }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ sm: "flex-end" }}
            >
              <EmailOutlinedIcon fontSize="small" color="action" />
              <Typography
                variant="body2"
                component="a"
                href="mailto:contact@syskraft.com"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                contact@syskraft.com
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ sm: "flex-end" }}
            >
              <WhatsAppIcon fontSize="small" color="action" />
              <Typography
                variant="body2"
                component="a"
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  "&:hover": { color: "#25D366" },
                }}
              >
                +91 9XXXXXXXXX
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ sm: "flex-end" }}
            >
              <LocationOnOutlinedIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                India
              </Typography>
            </Stack>
          </Stack>
        </Box>

        <Divider sx={{ my: 4, borderColor: "rgba(0,0,0,0.08)" }} />

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          © {new Date().getFullYear()} SysKraft. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
