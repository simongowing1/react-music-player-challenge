import './App.css';
import { PlayerProvider } from './contexts/PlayerContext';
import { SongsList } from './components/SongsList';
import { ControlBar } from './components/ControlBar';

function App() {
  return (
    <PlayerProvider>
      <main data-testid="main">
        <SongsList />
        <ControlBar />
      </main>
    </PlayerProvider>
  );
}

export default App;
