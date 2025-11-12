import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExitToApp } from '@mui/icons-material';

export function NavigationBar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#2C3E50' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <section className="flex">
          <Typography
            variant="h6"
            className="hidden sm:block font-bold text-white sm:!mr-[50px]"
          >
            Book Shelf
          </Typography>

          <Box className="flex gap-4">
            <Button
              color="inherit"
              component={Link}
              to="/"
              className="hover:bg-gray-500 rounded"
            >
              Library
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/book-collection"
              className="hover:bg-gray-500 rounded"
            >
              Collection
            </Button>
          </Box>
        </section>

        <Button
          color="inherit"
          component={Link}
          to="/logout"
          className="hover:bg-red-500 rounded"
        >
          <ExitToApp />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
