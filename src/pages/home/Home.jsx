import React, { useState, useContext, useEffect } from 'react';

import { ClientContext } from '../../App';
import { FindProjectOrderDatesRequest } from '../../proto/supply_pb';
import { useGrpc } from '../../hooks/useGrpc';
import { Order } from './Order';
import { OrdersList } from './OrdersList';

export const Home = () => {
  const [currentOrder, setCurrentOrder] = useState(null);

  const client = useContext(ClientContext);

  const findProjectOrderDates = async ({ id }) => {
    const request = new FindProjectOrderDatesRequest();
    request.setProjectId(id);

    return await client.findProjectOrderDates(request, {});
  };

  const [data, error, loading, makeRequest] = useGrpc('');
  const fetchDates = () => makeRequest(findProjectOrderDates, { id: '' });

  useEffect(() => {
    fetchDates();
  }, []);

  return (
    <div className="mt-8 flex mx-auto items-start container font-sans text-base">
      <div>
        <div className="w-96 border rounded-lg shadow overflow-hidden border-grey">
          {!data && loading && <div className="p-2">Loading...</div>}
          {error && <div className="p-2">Error: {error.message}</div>}
          {data && <OrdersList orders={data.ordersList} setCurrentOrder={setCurrentOrder} />}
        </div>
      </div>
      <div className="flex-1 ml-4">
        <Order id={currentOrder} refetchDates={fetchDates} />
      </div>
    </div>
  );
};
