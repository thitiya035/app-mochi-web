import './app.css';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '@shared/react';

function App() {
  return (
    <div>
      <NavigationBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
