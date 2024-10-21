import axios from 'axios';

export const getEpisodes = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    return response.data?.results;
};

export const getCharacters = async (page: number = 1) => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await axios.get(url);
    return response.data.results
};

export const getEpisodeById = async (episodeId: number) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
    return response.data;
};

export const getCharactersByIds = async (characterIds: string[]) => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterIds.join(',')}`);
    return response.data;
};
