import { Grid, Card, CardContent, CardActions, Typography, Stack, Box } from "@mui/material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import * as styles from "./Dashboard.style";
import IconComponent from "../IconComponent";

export default function ExperienceCard({ experiences }) {
    return (
    <>
        {experiences !== undefined && experiences.length > 0 && (
            <>
                <Grid id="experiences" item sx={styles.gridItem}> 
                    <Typography variant="h3" color="text">Experiências</Typography>
                </Grid>
                <Grid item sx={styles.gridContainerCards}>
                    {experiences.map((xp, index) => (
                        <Card 
                            key={index} 
                            sx={styles.card}
                        >
                            <CardContent>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <WorkOutlineIcon color="secondary" fontSize="large" />
                                    <Box>
                                        <Typography variant="h6" color="text.primary">
                                            {xp.role} - {xp.company}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {xp.period}
                                        </Typography>
                                    </Box>
                                </Stack>
                                <CardActions>
                                    {xp.skills ? xp.skills.map((skill, index) => (
                                        <IconComponent key={index} name={skill} width={20} height={30}/>
                                    )): null}
                                </CardActions>
                                <Typography variant="body1">
                                    {xp.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Grid>
            </>
        )}
    </>
    );
}