import { AppBar, Toolbar, Typography, Button, Box, Switch } from '@mui/material';
import { Link } from 'react-scroll';

export default function Header ({ toggleTheme }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" color="text" sx={{ flexGrow: 1 }}>
                    Portifólio
                </Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <Link to="about-me" smooth={true} duration={500}>
                        <Button color="inherit">Sobre Mim</Button>
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        <Button color="inherit">Projetos</Button>
                    </Link>
                    <Link to="experiences" smooth={true} duration={500}>
                        <Button color="inherit">Experiências</Button>
                    </Link>
                    <Link to="education" smooth={true} duration={500}>
                        <Button color="inherit">Formação Acadêmica</Button>
                    </Link>
                </Box>
                <Switch
                onChange={toggleTheme}
                color='secondary'
                />
            </Toolbar>
        </AppBar>
    )
}