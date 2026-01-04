import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    IconButton,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionDialogContent = motion(DialogContent);

interface KnowMoreProps {
    open: boolean;
    isClose: () => void;
    name?: string;
    description?: string;
    experience?: string;
    education?: string;
    image?: string;
}

const KnowMore: React.FC<KnowMoreProps> = ({
    open,
    isClose,
    name,
    description,
    experience,
    education,
    image,
}) => {
    return (
        <Dialog
            open={open}
            onClose={isClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 3,
                    overflow: "visible",
                },
            }}
        >
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                sx={{
                    position: "relative",
                    height: 120,
                    borderRadius: "12px 12px 0 0",
                    backgroundImage:
                        "linear-gradient(135deg, #2563eb, #3b82f6, #2563eb)",
                    backgroundSize: "200% 200%",
                    backgroundPosition: "0% 50%",
                }}
            >
                {image && (
                    <motion.img
                        src={image}
                        alt={name || "Profile image"}
                        loading="lazy"
                        decoding="async"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        style={{
                            position: "absolute",
                            right: 24,
                            bottom: -48,
                            width: 126,
                            height: 126,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "4px solid #fff",
                            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
                            backgroundColor: "#fff",
                        }}
                    />

                )}

                <IconButton
                    onClick={isClose}
                    aria-label="Close dialog"
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        "&:hover": { backgroundColor: "#fff" },
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </MotionBox>

            <MotionDialogContent
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
                sx={{ pt: 4, px: 4, pb: 4 }}
            >
                {name && (
                    <Typography variant="h5" fontWeight={700}>
                        {name}
                    </Typography>
                )}

                {experience && (
                    <>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle2" fontWeight={600}>
                            Experience
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {experience}
                        </Typography>
                    </>
                )}

                {education && (
                    <>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="subtitle2" fontWeight={600}>
                            Education
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {education}
                        </Typography>
                    </>
                )}

                {description && (
                    <>
                        <Divider sx={{ my: 2 }} />
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                        >
                            {description}
                        </Typography>
                    </>
                )}
            </MotionDialogContent>
        </Dialog>
    );
};

export default KnowMore;
