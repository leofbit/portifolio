import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Button, Modal, Box } from "@mui/material";
import IconComponent from "../../IconComponent";
import * as styles from "../Dashboard.style";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

export default function ProjectCard ({ projects }) {
    const [nameSlug, setNameSlug] = useState();
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
    <>
        {projects !== undefined && projects.length > 0 && (
            <>
                <Grid id="projects" item sx={styles.gridItem}> 
                    <Typography variant="h3" color="text">Projetos</Typography>
                </Grid>
                <Grid item sx={styles.gridContainerCards}>
                    {projects.map((project, index) => (
                        <Card 
                            key={index}
                            sx={styles.card}
                        >
                            <CardMedia
                                sx={{ height: 300 }}
                                image={project.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography 
                                    variant="body"
                                    color="text.secondary"     
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        maxWidth: '100%',
                                        display: 'block'
                                    }}>
                                    {project.description}
                                </Typography>
                                {/* =0
                                <CardActions sx={{display: 'flex', flexWrap: 'wrap'}}>
                                    {project.skills && project.skills.map((skill, index) => (
                                        <IconComponent key={index} name={skill} width={30} height={40}/>
                                    ))}
                                </CardActions>
                                */}
                                <Box sx={{display: 'flex', gap:'.5rem'}}>
                                    {project.media &&
                                         <Button 
                                            variant="contained" 
                                            color="secondary" 
                                            sx={{
                                                height: '2rem',
                                            }} onClick={() => handleOpen(project)}
                                            >
                                            Ver mais
                                        </Button>
                                        }
                                    <ProjectDetails open={open} onClose={handleClose} project={selectedProject} />
                                    {project.sourceCode &&
                                        <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        sx={{
                                            height: '2rem',
                                        }}
                                        target="_blank"
                                        href={project.sourceCode.url}
                                        startIcon={<IconComponent name={project.sourceCode.plataform} width={20} height={30} onSlugChange={setNameSlug}/>}
                                        > 
                                            {nameSlug || "Ver Código"}
                                        </Button>
                                    }
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </>
        )}
    </>
    )
}