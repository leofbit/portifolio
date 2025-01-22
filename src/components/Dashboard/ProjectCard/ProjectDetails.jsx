import React, { useState } from 'react';
import { Modal, Typography, Grid, IconButton } from "@mui/material";
import IconComponent from "../../IconComponent";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";

export default function ProjectModal({ open, onClose, project }) {
    const [selectedMedia, setSelectedMedia] = useState(null);  
    const [openFullScreen, setOpenFullScreen] = useState(false);

    if (!open || !project || !project.media || project.media.length === 0) {
        return null; 
    }

    const handleImageClick = (media) => {
        if (media.type === "image") {
            setSelectedMedia(media.src); 
            setOpenFullScreen(true);  
        }
    };

    const handleCloseFullScreen = () => {
        setOpenFullScreen(false);  
        setSelectedMedia(null);  
    };

    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Grid sx={styles.modalContainer}>
                    <IconButton 
                        onClick={onClose} 
                        sx={styles.closeButton}>
                        <CloseIcon />
                    </IconButton>
                    <Grid item xs={12} md={12}>
                        <Carousel autoPlay={false} indicators={true}>
                            {project.media.map((media, index) => (
                                media.type === "video" ? (
                                    <video 
                                        key={index} 
                                        src={media.src} 
                                        controls 
                                        style={styles.media} 
                                        alt={`project-video-${index}`}
                                    />
                                ) : (
                                    <img 
                                        key={index} 
                                        src={media.src} 
                                        alt={`project-image-${index}`} 
                                        style={styles.media} 
                                        onClick={() => handleImageClick(media)}  // Handle image click
                                    />
                                )
                            ))}
                        </Carousel>
                    </Grid>
                    <Grid item sx={{display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '1rem'}}>
                        {project.skills && project.skills.map((skill, index) => (
                            <IconComponent key={index} name={skill} width={window.innerWidth <= 768 ? 20 : 30} height={window.innerWidth <= 768 ? 30 : 40}/>
                        ))}
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">
                            {project.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {project.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Modal>
            <Modal open={openFullScreen} onClose={handleCloseFullScreen}>
                <Grid sx={styles.fullScreenModalContainer}>
                    <IconButton 
                        onClick={handleCloseFullScreen} 
                        sx={{...styles.closeButton, color:'white'}}>
                        <CloseIcon />
                    </IconButton>
                    <img 
                        src={selectedMedia} 
                        alt="Full-screen" 
                        style={styles.fullScreenImage} 
                    />
                </Grid>
            </Modal>
        </>
    );
}

const styles = {
    modalContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80vw",
        maxWidth: "800px",
        overflowY: "auto",
        bgcolor: "background.paper",
        backgroundImage: "cover",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    },
    media: {
        width: "100%",
        borderRadius: "10px",
        marginTop: '20px',
        maxHeight: "500px",
        objectFit: "cover", 
        cursor: 'pointer', 
    },
    
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10
    },

    fullScreenModalContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.7)", 
    },
    
    fullScreenImage: {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain", 
    },
};
