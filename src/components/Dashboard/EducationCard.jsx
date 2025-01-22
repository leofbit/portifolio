import { Card, CardContent, Typography, Grid, CardActions, Button } from '@mui/material';
import * as styles from "./Dashboard.style";

export default function EducationCard({ education }) {
    return (
    <>
        {education !== undefined && education.length > 0 && (
            <>
                <Grid id="education" item sx={styles.gridItem}> 
                    <Typography variant="h3" color="text" fontSize={{xs:'2.6rem', sm:'3rem'}}>Formação Acadêmica</Typography>
                </Grid>
                <Grid item sx={styles.gridContainerCards}>
                    {education.map((edu, index) => (
                        <Card
                            key={index} 
                            sx={styles.card}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {edu.institution}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {edu.degree}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    Ano de Conclusão: {edu.year}
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