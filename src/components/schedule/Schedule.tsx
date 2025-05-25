import "./Schedule.css";
import { ScheduleItem } from "./ScheduleItem";

export const Schedule = () => {
  return (
    <div className="schedule">
      <h1>WEDDING SCHEDULE</h1>
      <h2>SATURDAY, NOVEMBER 29, 2025</h2>
      <div className="schedule__group">
        <div className="schedule__details">
          <ScheduleItem timing="3:30 PM" title="MONK CEREMONY" />
          <ScheduleItem timing="4:09 PM" title="ENGAGEMENT AND TEA CEREMONY" />
          <ScheduleItem timing="5:00 PM" title="WATER BLESSING CEREMONY" />
          <ScheduleItem timing="6:30 PM" title="DINNER RECEPTION" />
        </div>
      </div>
    </div>
  );
};
