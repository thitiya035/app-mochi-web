import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Book Shelf</Typography>

        <Box sx={{ display: 'flex', flexGrow: 1 }} className="ml-2">
          <Button color="inherit" component={Link} to="/">
            Library
          </Button>
          <Button color="inherit" component={Link} to="/book-collection">
            Collection
          </Button>
        </Box>
        <Button color="inherit" component={Link} to="/logout">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
