import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import data from '../config/data.json';

export default function Footer() {
    return (
        <Box component="footer" sx={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={6} md={4} sx={styles.textCenter}>
                        <Typography variant="h6">Contato</Typography>
                        <Typography variant="body1" sx={styles.contactCenter}>
                            <EmailIcon sx={{ mr: 1 }} /> {data.contacts.email}
                        </Typography>
                        <Typography variant="body1" sx={styles.contactCenter}>
                            <PhoneIcon sx={{ mr: 1 }} /> {data.contacts.phone}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={4} sx={styles.textCenter}>
                        <Typography variant="h6">Redes Sociais</Typography>
                        <IconButton href={data.contacts.github} target="_blank" color="inherit">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton href={data.contacts.linkedin} target="_blank" color="inherit">
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6} md={4} sx={styles.textCenter}>
                        <Typography variant="h6">© {new Date().getFullYear()} - {data.name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

const styles = {
    footer: {
        bgcolor: 'background.paper',
        color: "text.primary",
        py: 2,
        px: 1,
        width: "100%",
        position: "relative",
        bottom: 0,
        left: 0,
    },
    textCenter: {
        textAlign: "center"
    },
    contactCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};
