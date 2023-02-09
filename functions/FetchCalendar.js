export const fetchCalendar = async () => {
  return await fetch("/api/calendar").then((res) => res.json());
};
