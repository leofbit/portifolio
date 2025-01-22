export const gridContainer = {
  padding: '3rem 6rem'
};
  
export const gridItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: '1rem 0',
  width: '100%'
};

export const abboutMe = {
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  gap: '1rem',
  };
  
export const gridButtonSkills = {
  margin: '2rem 0'
};

export const stackButtons = {
  flexWrap: 'wrap', 
  justifyContent: 'center',
  alignItems: 'center',
};

export const img = {
  borderRadius: '100%',
  objectFit: 'cover',
  height: '20rem',
  width: '20rem',
  border: 'rem solid pink',
};

export const gridContainerCards = {
  gap: '.5rem', 
  display: 'flex', 
  flexWrap: 'wrap', 
  justifyContent: 'center', 
  margin: 'auto'
};

export const card = {
  maxWidth: '30rem', 
  minWidth:'30rem',
  transition: 'all 0.3s ease-in-out',
  "&:hover": { 
      transform: 'scale(1.05)', 
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
  }  
};