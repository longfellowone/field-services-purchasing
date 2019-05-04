import React from 'react';

export const OrderDates = ({ date, groupedOrdersByDate, setCurrentOrder }) => {
  const orderSummaryItem = groupedOrdersByDate[date].map(order => (
    <OrderSummaryItem order={order} setCurrentOrder={setCurrentOrder} />
  ));

  return (
    <>
      <tr>
        <td className="bg-grey-light text-center border-t border-b border-grey shadow" colspan="2">
          {date}
        </td>
      </tr>
      {orderSummaryItem}
    </>
  );
};

const OrderSummaryItem = ({ order, setCurrentOrder }) => {
  const status = `text-right ${order.status === 'New!' && 'text-red font-bold'}`;

  return (
    <tr className="cursor-pointer hover:bg-blue-lightest" onClick={() => setCurrentOrder(order)}>
      <td className="text-left">{order.project_name}</td>
      <td className={status}>{order.status}</td>
    </tr>
  );
};
