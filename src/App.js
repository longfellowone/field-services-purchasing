import React from 'react';

import { Home } from './pages/home/Home';
import { SupplyPromiseClient } from './proto/supply_grpc_web_pb';

// const client = new SupplyPromiseClient('http://34.83.209.79:30564');
const client = new SupplyPromiseClient('http://localhost:8080');
export const ClientContext = React.createContext();

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  );
}

export default App;
