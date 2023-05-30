import React from 'react';
import SummaryOrder from './SummaryOrder';
import { useState } from 'react';

const Order = ({ order, index }) => {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <>
      <tr
        key={order.Id}
        class="bg-white border-b text-center hover:text-black hover:bg-gray-50/50 transition-all duration-200 "
      >
        <td class="px-6 py-4">{index + 1}</td>
        <th
          scope="row"
          class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap "
        >
          {order.Code}
        </th>
        <td class="px-6 py-4">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="font-bold border text-xs  p-2  rounded-md bg-neutral-50 border-neutral-300 text-neutral-500"
          >
            {showSummary ? 'بستن' : 'مشاهده'}
          </button>
        </td>
      </tr>
      {showSummary && <SummaryOrder order={order} />}
    </>
  );
};

export default Order;
