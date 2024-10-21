"use client"
import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

interface Episode {
    id: number;
    name: string;
}

interface SidebarProps {
    episodes: Episode[];
    selectedEpisodeId: number | null;
    onSelectEpisode: (id: number) => void;
}

const SideBar: React.FC<SidebarProps> = ({ episodes, selectedEpisodeId, onSelectEpisode }) => {
    return (
        <Box sx={{
            width: '100%',
            maxHeight: '100vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
        }}>
            <h4>
                <b>Episodes </b></h4><hr />
            <List>
                {episodes.map((episode) => (
                    <ListItem
                        key={episode.id}
                        button
                        onClick={() => onSelectEpisode(episode.id)}
                        sx={{
                            backgroundColor: selectedEpisodeId === episode.id ? '#e0e0e0' : 'transparent',
                            borderLeft: selectedEpisodeId === episode.id ? '4px solid #3f51b5' : '4px solid transparent'
                        }}
                    >
                        <ListItemText primary={episode.name} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SideBar;
