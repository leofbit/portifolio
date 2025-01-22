import { AppBar, Toolbar, Typography, Button, Box, Switch } from '@mui/material';
import { useColorScheme } from "@mui/material/styles";
import { Link as ScrollLink } from 'react-scroll'; // Renomeando a importação

export default function Header ({ toggleTheme }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="">
                <Toolbar>
                    <Typography variant="h6" component="div" color="text" sx={{ flexGrow: 1 }}>
                        Portifólio
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <ScrollLink to="about-me" smooth={true} duration={500}>
                            <Button color="inherit">Sobre Mim</Button>
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            <Button color="inherit">Projetos</Button>
                        </ScrollLink>
                        <ScrollLink to="experiences" smooth={true} duration={500}>
                            <Button color="inherit">Experiências</Button>
                        </ScrollLink>
                        <ScrollLink to="education" smooth={true} duration={500}>
                            <Button color="inherit">Formação Acadêmica</Button>
                        </ScrollLink>
                    </Box>
                    <Switch
                    onChange={toggleTheme}
                    color='secondary'
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}