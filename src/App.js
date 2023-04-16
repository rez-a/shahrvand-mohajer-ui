import InitAlert from 'components/InitAlert';
import AllRoutes from 'components/routers/Routes';
import Providers from 'providers/Providers';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Providers>
        <InitAlert />
        <AllRoutes />
      </Providers>
    </div>
  );
}

export default App;
