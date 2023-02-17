import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const newBalance = useRef(0);

  async function getData() {
    const res = await fetch("/api/calendar?_limit=10");
    const data = await res.json();
    setCalendar(data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center ml-[25%] mr-[25%] bg-slate-50">
        <div id="month" className="">
          {calendar.map((month) => (
            <>
              <div
                className="flex flex-col justify-center items-center shadow-lg text-3xl border border-slate-200 rounded-lg mb-2 mt-2 bg-slate-200 min-w-full"
                key={month.id}
              >
                {month.month.toUpperCase()}
              </div>

              {/* <span>{(balance.current = balance.current + 1)}</span> */}
              {month.days.map((day) => (
                <div
                  className="shadow-md p-4 rounded flex bg-zinc-200 mb-2"
                  key={day.id}
                >
                  <div className="flex flex-col min-w-[40px] text-3xl items-center">
                    <span>{day.day.toUpperCase().slice(0, 3)}</span>
                    <span className="mt-4 text-8xl">
                      {day.id
                        .toString()
                        .substr(day.id.toString().indexOf(".") - 1, 3)}
                    </span>
                  </div>
                  <div className="flex flex-col ml-20 text-3xl items-center">
                    {day.transactions?.map((transaction) => (
                      <div
                        className="flex flex-col items-center"
                        key={transaction.id}
                      >
                        {transaction.amount == undefined ? (
                          <div>
                            <span className="uppercase">Balance</span>
                            <br />
                            <span className="text-8xl mt-8">
                              $
                              {newBalance.current >= 0 ? (
                                <span className="text-green-500 mb-8">
                                  {newBalance.current}
                                </span>
                              ) : (
                                <span className="text-red-500">
                                  {newBalance.current}
                                </span>
                              )}
                            </span>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    ))}

                    {/* {day.transactions?.map((transaction) => (
                      <>
                        <span key={transaction.id}>
                          {transaction.amount == undefined
                            ? <span className="ml-2">Balance: ${newBalance.current}`
                            : `Balance: $${(newBalance.current +=
                                transaction.amount)}
                                Amount: $${transaction.amount} 
                                `}
                        </span>
                      </>
                    ))} */}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
    // <div className="flex flex-col justify-center items-center text-center mt-10 ">
    //   {calendar.map((month) => (
    //     <div className="flex flex-col" key={month.id}>
    //       <h2 className="shadow-md rounded-md text-3xl p-5 pr-10 pl-10">
    //         {month.month}
    //       </h2>
    //       {month.days.map((day) => (
    //         <div className="flex" key={day.id}>
    //           <div className="flex shadow rounded-md text-3xl p-5 pr-10 pl-10 mb-5 border-1">
    //             <div className="shadow-md rounded-md text-3xl p-5 pr-10 pl-10 mr-5 max-h-[100px]">
    //               <h3>
    //                 {day.day.substring(0, month.month.length - 4).toUpperCase()}
    //               </h3>{" "}

    //               <h4>
    //                 {day.id
    //                   .toString()
    //                   .substr(day.id.toString().indexOf(".") - 1, 3)}
    //               </h4>
    //             </div>

    //             <div className="shadow-md rounded-md text-3xl p-5 pr-10 pl-10 mr-5 max-h-[100px]">
    //               <p>Balance</p>
    //               <p>$800</p>
    //             </div>
    //             <div className="flex flex-col">
    //               {day.transactions?.map((transaction) => (
    //                 <span
    //                   className="shadow-md rounded-md text-3xl p-5 pr-10 pl-10 mr-5 flex justify-between"
    //                   key={transaction.id}
    //                 >
    //                   {transaction.amount < 0 ? (
    //                     <span className="text-red-500">
    //                       ${transaction.amount}
    //                     </span>
    //                   ) : transaction.amount > 0 ? (
    //                     <span className="text-green-500">
    //                       ${transaction.amount}
    //                     </span>
    //                   ) : (
    //                     <div>No Transactions</div>
    //                   )}
    //                   {transaction.merchantName}
    //                   {transaction.description}
    //                 </span>
    //               ))}{" "}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Calendar;
