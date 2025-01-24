import { useContext } from "react";
import DataContext from "../contexts/DataContext";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import DynamicIcon from "./DynamicIcon";

export default function Footer() {
    const data = useContext(DataContext)
    return (
        <Box component="footer" sx={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={6} md={4} sx={styles.textCenter}>
                        <Typography variant="h6">Contato</Typography>
                        <Box sx={styles.contactCenter}>
                            <DynamicIcon iconName={'Email'} size={20}/>
                            <Typography>{data.contacts.email}</Typography>
                        </Box>
                        <Box sx={styles.contactCenter}>
                            <DynamicIcon iconName={'Phone'} size={20}/>
                            <Typography>{data.contacts.phone}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={4} sx={styles.textCenter}>
                        <Typography variant="h6">Redes Sociais</Typography>
                        <IconButton href={data.contacts.github} target="_blank" color="inherit">
                            <DynamicIcon iconName={'GitHub'} size={30}/>
                        </IconButton>
                        <IconButton href={data.contacts.linkedin} target="_blank">
                            <DynamicIcon iconName={'LinkedIn'} size={30} color="#5ab0f7"/>
                        </IconButton>
                        <IconButton href={`https://api.whatsapp.com/send?phone=${data.contacts.phone.replace(/\D/g, '')}&text=Oi!%20Vim%20pelo%20seu%20Portif%C3%B3lio.`} target="_blank" color="inherit">
                            <DynamicIcon iconName={'WhatsApp'} size={30} color="green"/>
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
        justifyContent: "center",
        gap: 1
    }
};
