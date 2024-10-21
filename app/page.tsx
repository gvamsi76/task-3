"use client"
import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Container, Grid } from '@mui/material';
import CharacterCard from './components/CharacterCard/CharacterCard';
import SideBar from './components/SideBar/SideBar';
import { getCharacters, getCharactersByIds, getEpisodeById, getEpisodes } from './utils';

interface Episode {
  id: number;
  name: string;
}

interface Character {
  id: number;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedEpisodeName, setSelectedEpisodeName] = useState<string>('');


  const fetchEpisodes = async () => {
    const response = await getEpisodes()
    setEpisodes(response);
  };
  const fetchCharacters = async () => {
    setLoading(true);

    if (selectedEpisodeId) {
      const episodeData = await getEpisodeById(selectedEpisodeId);
      setSelectedEpisodeName(episodeData.name); 

      const characterIds = episodeData?.characters.map((url: string) =>
        url.split('/').pop()
      );

      const charactersData = await getCharactersByIds(characterIds); 
      setCharacters(charactersData); 
    } else {
      const charactersData = await getCharacters(currentPage); 
      setCharacters(charactersData.results);
      setTotalPages(charactersData?.info?.pages);
    }

    setLoading(false);
  };

useEffect(() => {
    fetchEpisodes();
    fetchCharacters();
  }, [selectedEpisodeId, currentPage]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container maxWidth="lg">
      <Box className='d-flex justify-content-space-around' >
        <h3>Rick and Morty Charecters</h3>
      </Box>
        
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={3}>
          <Box sx={{ position: 'sticky', top: 0, height: '100vh' }}>
            <SideBar episodes={episodes} selectedEpisodeId={selectedEpisodeId} onSelectEpisode={setSelectedEpisodeId} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <CharacterCard
              characters={characters}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              episodeName={selectedEpisodeName}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

