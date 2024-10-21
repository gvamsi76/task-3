 "use client"
import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Pagination, Box } from '@mui/material';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterGridProps {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  episodeName: string;
}

const CharacterCard: React.FC<CharacterGridProps> = ({ characters, currentPage, totalPages, onPageChange, episodeName }) => {
  return (
    <Box sx={{ width: '100%' }}>
        
        <h3><b>{characters?.length} </b> character in Episode <b>{episodeName} </b></h3>
      <Grid container spacing={2}>
        {characters?.map((character) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={character.id}>
            <Card>
              <CardMedia component="img" height="140" image={character.image} alt={character.name} />
              <CardContent>
                <Typography variant="h6">{character.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_e, page) => onPageChange(page)}
          color="primary"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default CharacterCard;
