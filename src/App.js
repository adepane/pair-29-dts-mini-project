// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';

import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
