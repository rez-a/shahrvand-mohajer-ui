import InitAlert from 'components/InitAlert';
import AllRoutes from 'components/routers/Routes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <InitAlert />
      <AllRoutes />
    </div>
  );
}

export default App;
