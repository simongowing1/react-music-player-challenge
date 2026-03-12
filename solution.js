import React, { createContext, useContext, useState } from 'react';
import {
    BarSongTitle,
    BottomBar,
    Button,
    PlayList,
    Song,
    SongTitle,
} from './styles.js';
import { songList } from './constants.js';

const buttonLabels = ['Not replaying', 'Replaying all', 'Replaying one'];

const PlayerContext = createContext(null);

const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [currentMode, setCurrentMode] = useState(buttonLabels[0]);
    return (
        <PlayerContext.Provider value={{ currentSong, setCurrentSong, currentMode, setCurrentMode }}>
            {children}
        </PlayerContext.Provider>
    )
};

const usePlayerContext = () => {
    const context = useContext(PlayerContext);
    if (!context) throw new Error('usePlayerContext must be used within a PlayerProvider');
    return context;
};

const ControlBar = () => {
    const { currentSong, setCurrentSong, currentMode, setCurrentMode } = usePlayerContext();
    const barTitle = currentSong ? `${currentSong.author} - ${currentSong.title}` : ''

    const handleCurrentModeButtonClick = () => {
        const currentIndex = buttonLabels.indexOf(currentMode);
        const nextIndex = (currentIndex + 1) % buttonLabels.length;
        setCurrentMode(buttonLabels[nextIndex]);
    }

    const handlePreviousButtonClick = () => {
        if (!currentSong) return;
        const currentIndex = songList.findIndex(({ id }) => id === currentSong?.id);
        const prevIndex = (currentIndex - 1 + songList.length) % songList.length;
        switch (currentMode) {
            case buttonLabels[0]:
                if (currentIndex === 0) return;
                setCurrentSong(songList[prevIndex]);
                break;
            case buttonLabels[1]:
                setCurrentSong(songList[prevIndex])
                break;
            default: setCurrentSong(currentSong);
        }

    }

    const handleNextButtonClick = () => {
        if (!currentSong) return;
        const currentIndex = songList.findIndex(({ id }) => id === currentSong.id);
        const nextIndex = (currentIndex + 1) % songList.length;
        switch (currentMode) {
            case buttonLabels[0]:
                if (currentIndex === songList.length - 1) setCurrentSong(null);
                else setCurrentSong(songList[nextIndex]);
                break;
            case buttonLabels[1]:
                setCurrentSong(songList[nextIndex]);
                break;
            default:
                setCurrentSong(currentSong);
        }
    }

    return (
        <BottomBar>
            <BarSongTitle data-testid="barTitle">{barTitle}</BarSongTitle>
            <div>
                <Button data-testid="previousButton"
                    onClick={handlePreviousButtonClick}>Previous</Button>
                <Button data-testid="nextButton"
                    onClick={handleNextButtonClick}>Next</Button>
                <Button data-testid="currentModeButton"
                    onClick={handleCurrentModeButtonClick}>{currentMode}</Button>
            </div>
        </BottomBar>
    );
};

const Songs = () => {
    const { currentSong, setCurrentSong } = usePlayerContext();

    return (
        <PlayList>
            {songList.map(({ title, author, id }) => (
                <Song key={id} onClick={() => setCurrentSong({ id, title, author })}>
                    <SongTitle data-testid={id} active={currentSong?.id === id}>
                        {title}
                    </SongTitle>
                    <p>{author}</p>
                </Song>
            ))}
        </PlayList>
    );
};

export { PlayerProvider, Songs, ControlBar };
