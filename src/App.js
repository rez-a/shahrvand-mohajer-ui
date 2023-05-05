import InitAlert from 'components/InitAlert';
import AllRoutes from 'components/routers/Routes';
import Providers from 'providers/Providers';
import { INSTANT_MESSAGINGS } from 'services/endPoints';
import { fetcher } from 'services/swr/fetcher';
import useSWR from 'swr';

function App() {
  const { data: message } = useSWR(INSTANT_MESSAGINGS, fetcher);
  return (
    <div className="App">
      <Providers>
        {!!message && <InitAlert message={message} />}
        <AllRoutes />
      </Providers>
    </div>
  );
}

export default App;
