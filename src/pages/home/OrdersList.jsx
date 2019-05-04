import React from 'react';

import { groupBy } from '../../utils/group-by';

export const OrdersList = ({ orders, setCurrentOrder }) => {
  const orderDate = order => new Date(order.date * 1000).toDateString();
  const groupByDate = groupBy(orderDate);
  const groupedOrdersByDate = groupByDate(orders);

  const orderDates = Object.keys(groupedOrdersByDate).map(date => (
    <OrderDates
      key={date}
      date={date}
      groupedOrdersByDate={groupedOrdersByDate}
      setCurrentOrder={setCurrentOrder}
    />
  ));

  return (
    <table className="w-full border-collapse">
      <thead className="bg-blue text-blue-lightest">
        <tr>
          <th className="text-left">Project</th>
          <th className="text-right">Status</th>
        </tr>
      </thead>
      <tbody className="align-middle">{orderDates}</tbody>
    </table>
  );
};

const OrderDates = ({ date, groupedOrdersByDate, setCurrentOrder }) => {
  const orderSummaryItem = groupedOrdersByDate[date].map(order => (
    <OrderSummaryItem order={order} setCurrentOrder={setCurrentOrder} key={order.id} />
  ));

  return (
    <>
      <tr>
        <td className="bg-grey-light text-center border-t border-b border-grey shadow" colSpan="2">
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
    <tr className="cursor-pointer hover:bg-blue-lightest" onClick={() => setCurrentOrder(order.id)}>
      <td className="text-left">{order.projectName}</td>
      <td className={status}>{order.status === 'Sent' ? 'New!' : order.status}</td>
    </tr>
  );
};
