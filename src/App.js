// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';

import theme from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import MovieList from './containers/MovieList';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/tv" element={<MovieList data='tv'/>} />
          <Route path="/movies" element={<MovieList data='movies' />} />
          <Route path="/new-popular" element={<MovieList data='new-popular' />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
