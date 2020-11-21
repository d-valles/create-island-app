import './App.css';
import 'bulma/css/bulma.css'
import IslandGame from './sections/IslandGame/IslandGame';
import AppHeader from './sections/AppHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <IslandGame></IslandGame>
    </div>
  );
}

export default App;
