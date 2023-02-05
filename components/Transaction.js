import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center border rounded-lg shadow-md border-gray-100 p-4 m-4 ">
        <p>{transaction.date}</p>
        <p className="text-4xl">{transaction.date.slice(3, 5)}</p>
      </div>
      <div className="flex flex-col items-center border rounded-lg shadow-md border-gray-100 p-4 m-4">
        <p className="underline font-bold">BALANCE</p>

        {transaction.amount < 0 ? (
          <p className="text-red-500 text-4xl shrink">
            &#x28;${Math.abs(transaction.amount)}&#x29;
          </p>
        ) : (
          <p className="text-green-500 text-4xl shrink">
            ${transaction.amount}
          </p>
        )}
      </div>
    </div>
  );
};

export default Transaction;
