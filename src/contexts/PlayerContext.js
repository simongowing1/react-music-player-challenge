import { createContext, useState } from 'react';
import { buttonLabels } from '../constants/buttonLabels';

export const PlayerContext = createContext(null);

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [currentMode, setCurrentMode] = useState(buttonLabels[0]);
    return (
        <PlayerContext.Provider value={{ currentSong, setCurrentSong, currentMode, setCurrentMode }}>
            {children}
        </PlayerContext.Provider>
    )
};