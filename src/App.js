import React from 'react';

import { Home } from './pages/home/Home';
import { SupplyPromiseClient } from './proto/supply_grpc_web_pb';

// const client = new SupplyPromiseClient('http://34.83.209.79:30550');
const client = new SupplyPromiseClient('envoy-xwmrn:8080');
export const ClientContext = React.createContext();

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  );
}

export default App;
