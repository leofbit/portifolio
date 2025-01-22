import { Outlet } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { lightTheme, darkTheme } from "../theme/theme";
import Header from "../components/Header";
import { Box, CssBaseline } from "@mui/material";
import Footer from "../components/Footer";

export default function Rootlayout () {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Header toggleTheme={toggleTheme}/>
            <Outlet/>
            <Footer />
        </ThemeProvider>
    )
}