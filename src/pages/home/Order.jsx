import React from 'react';

export const Order = ({ order }) => {
  if (order === null) return <div className="border rounded-lg shadow p-2">No order selected</div>;

  const orderDate = order => new Date(order.date * 1000).toDateString();
  const orderItems = order.items.map(item => <Item item={item} />);

  return (
    <>
      <div className="border rounded-lg shadow pb-2 overflow-hidden border-grey">
        <div className="px-2 py-2 font-bold bg-blue text-blue-lightest">Order Details</div>
        <div className="mt-2 px-2 leading-normal">
          <div>
            {order.project_name} - {order.status}
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
    <tr className="">
      <td className="text-right">{item.quantity_requested}</td>
      <td className="font-bold">{item.product_uom}</td>
      <td>{item.product_name}</td>
      <td class="text-right">Waiting</td>
    </tr>
  );
};
