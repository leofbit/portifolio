import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import * as styles from "./Dashboard.style";
import IconComponent from "../IconComponent";
import { useState } from "react";

export default function SkillsStack ({ skills }) {
    const [slugs, setSlugs] = useState({});
    const onSlugChange = (index, slug) => {
        setSlugs((prevSlugs) => {
            if (!prevSlugs[index]) {
                return {
                    ...prevSlugs,
                    [index]: slug,
                };
            }
            return prevSlugs;
        });
    };
    return (
    <>
        {skills !== undefined && skills.length > 0 && (
            <Grid item xs={12} md={12} sx={styles.gridButtonSkills}>
                <Stack
                direction={{ sm: 'row' }}
                spacing={{ xs: 1, sm: 1, md: 4 }}
                divider={<Divider orientation="vertical" flexItem/>}
                useFlexGap
                sx={styles.stackButtons}
                >
                    {skills.map((skill, index) => (
                        <Button 
                        variant="outlined" 
                        color="secondary" 
                        size="large"
                        sx={{
                        width: {
                            xs: '20rem',
                            md: '10rem'
                        },
                        }}
                        key={index} 
                        startIcon={<IconComponent name={skill} width={20} height={30} onSlugChange={(slug) => onSlugChange(index, slug)}/>}
                        >
                            {slugs[index] || skill}
                        </Button>
                    ))}
                </Stack>
            </Grid>
        )}
    </>
    )
}