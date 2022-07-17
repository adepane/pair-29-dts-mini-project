// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';

import theme from './themes/theme';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
