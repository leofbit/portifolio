import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import DynamicIcon from "../DynamicIcon";

export default function HighlightCard({ highlights }) {
  return (
    <>
      {highlights !== undefined && highlights.length > 0 && (
          <>
            <Grid item xs={12} md={12}>
              <Grid container spacing={3} justifyContent="center">
                  {highlights.map((highlight, index) => (
                    <Grid item key={index}>
                      <Card sx={styles.card}>
                        <Box sx={styles.iconContainer}>
                          {<DynamicIcon iconName={highlight.icon}/> || <StarIcon sx={{ fontSize: 40, color: "secondary.main" }} />}
                        </Box>
                        <CardContent>
                          <Typography variant="h4" sx={styles.title}>
                            {highlight.title}
                          </Typography>
                          <Typography variant="h2" sx={styles.value}>
                            {highlight.value}
                          </Typography>
                          <Typography variant="h6" sx={styles.description}>
                            {highlight.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))} 
              </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    p: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
    maxWidth: "30rem",
    minWidth: "20rem"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: "50%",
    bgcolor: "secondary.main",
    mb: 2,
  },
  title: {
    color: "text.primary"
  },
  value: {
    color: "secondary.main"
  },
  description: {
    mt: 1,
    color: "text",
  },
};