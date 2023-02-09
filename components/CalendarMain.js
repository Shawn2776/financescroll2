import React from "react";

const CalendarMain = ({ calendar }) => {
  return (
    <div>
      {calendar.map((item) => {
        <div>{item.id}</div>;
      })}
    </div>
  );
};

export default CalendarMain;
