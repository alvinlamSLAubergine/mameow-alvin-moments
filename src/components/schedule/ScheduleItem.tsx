type Props = {
  timing: string;
  title: string;
  width?: number;
};

export const ScheduleItem = ({ timing, title, width }: Props) => {
  return (
    <div className="schedule__item">
      <div className="schedule__item-icon" />
      <div className="schedule__item-timing">{timing}</div>
      <div
        className="schedule__item-title"
        style={{ width: width ? `${width}px` : undefined }}
      >
        {title}
      </div>
    </div>
  );
};
