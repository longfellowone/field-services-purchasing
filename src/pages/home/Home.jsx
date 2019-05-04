import React, { useState } from 'react';

import { OrderDates } from './OrderDates';
import { Order } from './Order';
import { groupBy } from '../../utils/group-by';

import { orders } from './models';

export const Home = () => {
  const [currentOrder, setCurrentOrder] = useState(null); // orders[0]
  const [searchFocused, setSearchFocused] = useState(false);

  const orderDate = order => new Date(order.date * 1000).toDateString();
  const groupByDate = groupBy(orderDate);
  const groupedOrdersByDate = groupByDate(orders);

  const orderDates = Object.keys(groupedOrdersByDate).map(date => (
    <OrderDates
      date={date}
      groupedOrdersByDate={groupedOrdersByDate}
      setCurrentOrder={setCurrentOrder}
    />
  ));

  const results = (
    <div className="relative">
      <div className="absolute bg-white w-full border border-grey shadow rounded-b-lg pin-t-1">
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
        <div className="p-2 border-t-2 border-transparent">Text</div>
      </div>
    </div>
  );

  const searchInputClass = `border border-grey rounded-t-lg ${!searchFocused && 'rounded-b-lg'}`;

  return (
    <div className="mt-8 flex mx-auto items-start container font-sans text-sm">
      <div>
        <div className="">
          <div className="border border-grey rounded-t-lg px-2 py-2 font-bold bg-blue text-blue-lightest">
            Project Search
          </div>
          <div className="border-b border-l border-r border-grey p-2 rounded-b-lg shadow">
            <div className={searchInputClass}>
              <input
                className="w-full my-1 py-1 px-2 outline-none bg-transparent"
                placeholder="Enter project name"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
            {searchFocused && results}
          </div>
        </div>
        <div className="w-96 mt-4 border rounded-lg shadow overflow-hidden border-grey">
          <table className="w-full border-collapse">
            <thead className="bg-blue text-blue-lightest">
              <th className="text-left">Project</th>
              <th className="text-right">Status</th>
            </thead>
            <tbody className="align-middle">{orderDates}</tbody>
          </table>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <Order order={currentOrder} />
      </div>
    </div>
  );
};
