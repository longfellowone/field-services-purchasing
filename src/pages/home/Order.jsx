import React, { useContext, useEffect } from 'react';

import { ClientContext } from '../../App';
import { useGrpc } from '../../hooks/useGrpc';
import { FindOrderRequest } from '../../proto/supply_pb';

export const Order = ({ id }) => {
  if (id === null) return <div className="border rounded-lg shadow p-2">No order selected</div>;

  const client = useContext(ClientContext);

  const findOrder = async ({ id }) => {
    const request = new FindOrderRequest();
    request.setId(id);

    return await client.findOrder(request, {});
  };

  const [data, error, loading, makeRequest] = useGrpc('null');
  const order = data.order;

  useEffect(() => {
    makeRequest(findOrder, { id });
  }, [id]);

  if (loading) {
    return <div className="border border-grey rounded-lg shadow p-2">Loading...</div>;
  }

  if (error) {
    return <div className="border border-grey rounded-lg shadow p-2">Error: {error.message}</div>;
  }

  const orderDate = order => new Date(order.date * 1000).toDateString();
  const orderItems = order.itemsList.map(item => <Item item={item} key={item.product.id} />);

  return (
    <>
      <div className="border rounded-lg shadow pb-2 overflow-hidden border-grey">
        <div className="px-2 py-2 font-bold bg-blue text-blue-lightest">Order Details</div>
        <div className="mt-2 px-2 leading-normal">
          <div>
            {order.project.name} - {order.status}
          </div>
          <div>{orderDate(order)}</div>
        </div>
      </div>
      <div className="border rounded-lg shadow mt-4 pb-2 overflow-hidden border-grey">
        <div className="px-2 py-2 font-bold bg-blue text-blue-lightest">Special Instructions</div>
        <div className="mt-2 px-2 leading-normal">
          <div>{order.comments}</div>
        </div>
      </div>
      <div className="border rounded-lg shadow mt-4 overflow-hidden border-grey">
        <table className="w-full border-collapse">
          <thead className="bg-blue text-blue-lightest">
            <tr>
              <th className="w-8 text-right">Requested</th>
              <th className="w-8">U</th>
              <th className="text-left">Product</th>
              <th className="text-right">Status</th>
            </tr>
          </thead>
          <tbody>{orderItems}</tbody>
        </table>
      </div>
    </>
  );
};

const Item = ({ item }) => {
  return (
    <tr>
      <td className="text-right">{item.quantityRequested}</td>
      <td className="font-bold">{item.product.uom}</td>
      <td>{item.product.name}</td>
      <td className="text-right">{item.itemStatus}</td>
    </tr>
  );
};
