import { useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';

export default function usePlayerContext() {
    const context = useContext(PlayerContext);
    if (!context) throw new Error('usePlayerContext must be used within a PlayerProvider');
    return context;
};