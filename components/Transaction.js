import React, { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Transaction = ({ transaction }) => {
  return (
    <div className="flex border rounded-lg border-gray-100 p-4 m-4 shadow-md">
      <div className="flex flex-col items-center border rounded-lg border-gray-100 p-4 m-4 ">
        <p>{transaction.date}</p>
        <p className="text-4xl">{transaction.date.slice(3, 5)}</p>
      </div>
      <div className="flex flex-col items-center border rounded-lg border-gray-100 p-4 mb-4 mt-4 mr-1">
        <p className="underline font-bold">BALANCE</p>
        {transaction.balance >= 0 ? (
          <p className="text-green-500 text-3xl">${transaction.balance}</p>
        ) : (
          <p className="text-red-500 text-3xl">${transaction.balance}</p>
        )}
        {/* {transaction.amount < 0 ? (
          <p className="text-red-500 text-4xl shrink">
            &#x28;${Math.abs(transaction.amount)}&#x29;
          </p>
        ) : (
          <p className="text-green-500 text-4xl shrink">
            ${transaction.amount}
          </p>
        )} */}
      </div>
      <div className="flex flex-col justify-center items-center border rounded-lg border-gray-100 p-2 ml-0 m-4">
        <p className="underline font-bold">
          {/* <AiOutlineDoubleRight /> */}Transactions
        </p>
        <p>
          {transaction.merchantName} &nbsp;
          {transaction.amount < 0 ? (
            <span className="text-red-500 shrink">
              &#x28;${Math.abs(transaction.amount)}&#x29;
            </span>
          ) : (
            <span className="text-green-500 shrink">${transaction.amount}</span>
          )}{" "}
          &nbsp;
          {transaction.description}
        </p>

        <p>
          {transaction.merchantName} &nbsp;
          {transaction.amount < 0 ? (
            <span className="text-red-500 shrink">
              &#x28;${Math.abs(transaction.amount)}&#x29;
            </span>
          ) : (
            <span className="text-green-500 shrink">${transaction.amount}</span>
          )}{" "}
          &nbsp;
          {transaction.description}
        </p>

        <p>
          {transaction.merchantName} &nbsp;
          {transaction.amount < 0 ? (
            <span className="text-red-500 shrink">
              &#x28;${Math.abs(transaction.amount)}&#x29;
            </span>
          ) : (
            <span className="text-green-500 shrink">${transaction.amount}</span>
          )}{" "}
          &nbsp;
          {transaction.description}
        </p>

        {/* {transaction.amount < 0 ? (
          <p className="text-red-500 text-4xl shrink">
            &#x28;${Math.abs(transaction.amount)}&#x29;
          </p>
        ) : (
          <p className="text-green-500 text-4xl shrink">
            ${transaction.amount}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Transaction;
