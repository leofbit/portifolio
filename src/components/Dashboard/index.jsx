import { useContext } from "react";
import DataContext from "../../contexts/DataContext";
import * as styles from "./Dashboard.style";
import { Box, Typography, Grid } from "@mui/material";
import accountImg from "/assets/images/account.png";
import ProjectCard from "./ProjectCard";
import ExperienceCard from "./ExperienceCard";
import SkillsStack from "./SkillksStack";
import EducationCard from "./EducationCard";
import HighlightCard from "./HighlightCard";

export default function Dashboard() {
    const data = useContext(DataContext)

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
            <Grid 
                container 
                sx={{ 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    padding: '1rem', 
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Grid 
                    item 
                    sx={{ 
                        ...styles.gridItem, 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        gap: { xs: '1rem', md: '30rem' }
                    }} 
                    xs={12} 
                    md={12}
                >
                    <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        gap: '1rem'
                    }} >
                        <Typography variant="h2" color="text">{data.name}, {getAge(data.birth)}</Typography>
                        <Typography variant="h5" color="text">{data.profession}</Typography> 
                        <Typography variant="h6" color="text.secondary">{data.description}</Typography> 
                    </Box>
                    <Box>
                        <img 
                            src={data.img ? data.img : accountImg} 
                            loading="lazy" 
                            style={{
                                width: '100%', 
                                maxWidth: '300px', 
                                height: 'auto', 
                                borderRadius: '10px',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid> 
                <SkillsStack skills={data.skills}/>
                <HighlightCard highlights={data.highlights} />
                <ProjectCard projects={data.projects}/>
                <ExperienceCard experiences={data.experiences} />
                <EducationCard education={data.education}/>
            </Grid>
        </>
    )
}