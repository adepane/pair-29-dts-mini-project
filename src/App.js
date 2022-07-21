// import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@mui/material';

import theme from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import MovieList from './containers/MovieList';
import Discover from "./containers/Discover";
import Login from './containers/Login';
import Register from './containers/Register';
import DetailMovie from './containers/DetailMovie';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import DetailTv from './containers/DetailTv';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/tv" element={<Discover data="tv" />} />
          <Route path="/movies" element={<Discover data="movie" />} />

          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <DetailMovie />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tv/:id"
            element={
              <ProtectedRoute>
                <DetailTv />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
