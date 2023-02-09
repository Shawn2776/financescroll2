import React, { useEffect, useState } from "react";
import CalendarMain from "./CalendarMain";

import { fetchCalendar } from "../functions/FetchCalendar";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    fetchCalendar().then(({ results }) => {
      setCalendar(results);
    });
  }, []);

  return (
    <div>
      <span>Transactions</span>
      <CalendarMain calendar={calendar} />
    </div>
  );
};

export default Calendar;
