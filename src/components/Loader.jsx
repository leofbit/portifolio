import { CircularProgress, Box} from "@mui/material";

export default function Loader() {
    return (
        <Box 
            sx={{
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh",
                bgcolor: "background.default"
            }}
        >
            <CircularProgress color="secondary" size={60} />
        </Box>
    );
}
