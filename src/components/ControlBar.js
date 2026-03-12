import { usePlayerContext } from '../hooks/usePlayerContext';
import { BottomBar, BarSongTitle, Button } from '../styles';
import { buttonLabels } from '../constants/buttonLabels';
import { songList } from './SongsList';

export function ControlBar() {
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