import React, { useState } from 'react';

import { Order } from './Order';
import { OrdersList } from './OrdersList';

export const Home = () => {
  const [currentOrder, setCurrentOrder] = useState(null);

  return (
    <div className="mt-8 flex mx-auto items-start container font-sans text-base">
      <div>
        <div className="w-96 border rounded-lg shadow overflow-hidden border-grey">
          <OrdersList setCurrentOrder={setCurrentOrder} />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <Order id={currentOrder} />
      </div>
    </div>
  );
};
