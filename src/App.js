import AllRoutes from 'components/routers/Routes';
import Providers from 'providers/Providers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/index">
        <Providers>
          <AllRoutes />
        </Providers>
      </BrowserRouter>
    </div>
  );
}

export default App;
