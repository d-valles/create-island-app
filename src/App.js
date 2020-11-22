import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import IslandGame from './sections/IslandGame/IslandGame';
import AppHeader from './sections/AppHeader/AppHeader';
import { ThemeProvider } from './context/themeContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider value={this.state}>
          <AppHeader></AppHeader>
          <IslandGame></IslandGame>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
