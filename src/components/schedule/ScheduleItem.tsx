type Props = {
  timing: string;
  title: string;
};

export const ScheduleItem = ({ timing, title }: Props) => {
  return (
    <div className="schedule__item">
      <div className="schedule__item-timing">{timing}</div>
      <div className="schedule__item-title">{title}</div>
    </div>
  );
};
