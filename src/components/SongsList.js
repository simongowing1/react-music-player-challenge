import { usePlayerContext } from '../hooks/usePlayerContext';
import { PlayList, Song, SongTitle } from '../styles';
import { songList } from '../constants/songList';

export function SongsList() {
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