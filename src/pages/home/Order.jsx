import React, { useContext, useEffect } from 'react';

import { ClientContext } from '../../App';
import { useGrpc } from '../../hooks/useGrpc';
import { FindOrderRequest, ProcessOrderRequest } from '../../proto/supply_pb';

export const Order = ({ id, refetchDates }) => {
  if (id === null)
    return <div className="border border-grey rounded-lg shadow p-2">No order selected</div>;

  const client = useContext(ClientContext);

  const findOrder = async ({ id }) => {
    const request = new FindOrderRequest();
    request.setId(id);

    return await client.findOrder(request, {});
  };

  const processOrder = async ({ id }) => {
    const request = new ProcessOrderRequest();
    request.setId(id);

    return await client.processOrder(request, {});
  };

  const [data, error, loading, makeRequest] = useGrpc('');
  const order = data.order;

  useEffect(() => {
    makeRequest(findOrder, { id });
  }, [id]);

  if (!data && loading) {
    return <div className="border border-grey rounded-lg shadow p-2">Loading...</div>;
  }

  if (error) {
    return <div className="border border-grey rounded-lg shadow p-2">Error: {error.message}</div>;
  }

  const orderDate = order => new Date(order.date * 1000).toDateString();

  const orderItems = order.itemsList
    .sort((a, b) => a.product.name.localeCompare(b.product.name))
    .map(item => <Item item={item} status={order.status} key={item.product.id} />);

  const handleClick = async () => {
    await makeRequest(processOrder, { id: order.id });
    refetchDates();
  };

  return (
    <>
      <div className="border rounded-lg shadow pb-2 overflow-hidden border-grey">
        <div className="px-2 py-1 font-bold bg-blue text-blue-lightest">
          <div className="py-1">Order Details ({order.id})</div>
        </div>
        <div className="mt-2 px-2 leading-normal flex justify-between">
          <div>
            <div>
              {order.project.name} - {order.status}
            </div>
            <div>{order.project.foremanEmail}</div>
            <div>{orderDate(order)}</div>
          </div>
          <div>
            {order.status === 'Sent' && (
              <button
                className="bg-green p-2 font-bold text-white rounded shadow-md border"
                onClick={handleClick}
              >
                Mark Processed
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="border rounded-lg shadow mt-4 pb-2 overflow-hidden border-grey">
        <div className="px-2 py-2 font-bold bg-blue text-blue-lightest">Special Instructions</div>
        <div className="mt-2 px-2 leading-normal">
          <div>{order.comments === '' ? 'No special instructions' : order.comments}</div>
        </div>
      </div>
      <div className="border rounded-lg shadow mt-4 overflow-hidden border-grey">
        <table className="w-full border-collapse">
          <thead className="bg-blue text-blue-lightest">
            <tr>
              <th className="w-8 text-right">Requested</th>
              <th className="w-8">U</th>
              <th className="text-left">Product</th>
              <th className="text-right">{order.status !== 'Sent' && 'Status'}</th>
            </tr>
          </thead>
          <tbody>{orderItems}</tbody>
        </table>
      </div>
    </>
  );
};

const Item = ({ item, status }) => {
  return (
    <tr>
      <td className="text-right">{item.quantityRequested}</td>
      <td className="font-bold">{item.product.uom}</td>
      <td>{item.product.name}</td>
      <td className="text-right">{status !== 'Sent' && item.itemStatus}</td>
    </tr>
  );
};
