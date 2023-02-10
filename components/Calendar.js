import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);

  async function getData() {
    const res = await fetch("/api/calendar");
    const data = await res.json();
    setCalendar(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {calendar.map((month) => (
        <div key={month.id}>
          <h2>{month.month}</h2>
          {month.days.map((day) => (
            <div key={day.id}>
              <h3>{day.day}</h3>
              <ul>
                {day.transactions?.map((transaction) => (
                  <li key={transaction.id}>
                    {transaction.merchantName}:
                    {transaction.amount < 0 ? (
                      <span className="text-red-500">{transaction.amount}</span>
                    ) : transaction.amount > 0 ? (
                      <span className="text-green-500">
                        {transaction.amount}
                      </span>
                    ) : (
                      <div>No Transactions</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
    // <div>
    //   {state.map((e) => (
    //     <h2 className="text-3xl font-bold" key={e.id}>
    //       {e.month}
    //       {e.days.map((day) => (
    //         <div key={day.id}>
    //           <div className="text-xl">
    //             {day.id
    //               .toString()
    //               .substr(day.id.toString().indexOf(".") - 1, 3)}{" "}
    //             - {day.day}
    //             {day.transactions.map((transaction) => (
    //               <ul key={transaction.id}>{transaction}</ul>
    //             ))}
    //           </div>
    //         </div>
    //       ))}
    //     </h2>
    //   ))}
    // </div>
  );
};

export default Calendar;
