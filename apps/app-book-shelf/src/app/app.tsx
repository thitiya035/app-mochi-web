import './app.css';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '@shared/react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans Thai', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
