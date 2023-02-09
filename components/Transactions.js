import React, { useState } from "react";
import Transaction from "./Transaction";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState("");

  const fetchTransactions = async () => {
    const res = await fetch("/api/transactions");
    const data = await res.json();
    setTransactions(data);
  };

  return (
    <div className="flex items-center justify-center">
      <section className="flex flex-col mt-20">
        <button onClick={fetchTransactions}>Load Transactions</button>
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              <Transaction transaction={transaction} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Transactions;

{
  /* <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="merchantName"
          >
            Merchant Name
          </label>
          <input
            type="text"
            value={transaction}
            onChange={(e) => setTransaction(e.target.value)}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="merchantName"
            placeholder="Enter the Merchant Name"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="amount"
          >
            Transaction Amount
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Enter the Transaction Amount"
          />
        </div>

        <div class="flex items-center justify-center">
          <div
            class="datepicker relative form-floating mb-3 xl:w-96"
            data-mdb-toggle-button="false"
          >
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date"
              data-mdb-toggle="datepicker"
            />
            <label for="floatingInput" class="text-gray-700">
              Select a date
            </label>
          </div>
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit Transaction
        </button>
      </form> */
}