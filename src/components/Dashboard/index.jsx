import { Box, Typography, Grid } from "@mui/material";
import * as styles from "./Dashboard.style";
import accountImg from "../../assets/images/account.png";
import data from '../../config/data.json';
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import SkillsStack from "./SkillksStack";
import EducationCard from "./EducationCard";

export default function Dashboard() {
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return `${age} anos`;
    }

    return (
        <>
            <Box sx={styles.boxContainer}>
                <Grid container sx={styles.gridContainer} display={{xs: 'inline-block', md: 'flex', sm: 'flex'}} padding={{xs: '2rem 1rem'}}>
                    <Grid id='about-me' item xs={12} md={6} sx={styles.abboutMe}>
                        <Typography variant="h2" color="text">{data.name}, {getAge(data.birth)}</Typography>
                        <Typography variant="h5" color="text">{data.profession}</Typography> 
                        <Typography variant="h6" color="text.secondary">{data.description}</Typography> 
                    </Grid>
                    <Grid item xs={12} md={6} sx={styles.gridItem}>
                        <img src= {data.img ? data.img : accountImg} loading="lazy" style={styles.img}/>
                    </Grid>
                    <SkillsStack skills={data.skills}/>
                    <ProjectCard projects={data.projects}/>
                    <ExperienceCard experiences={data.experiences} />
                    <EducationCard education ={data.education}/>
                </Grid>
            </Box>
        </>
    )
}