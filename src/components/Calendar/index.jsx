import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function Calendar({ events, eventClick, scheduleQueryParams, setScheduleQueryParams }) {
  const calendarRef = useRef(null);
  const [currentDate, setCurrentDate] = useState(moment());

  const RenderButton = (buttonProps) => {
    const { type } = buttonProps;
    const nextMonth = moment(currentDate).add(1, 'month').format('YYYY年MM月');
    const prevMonth = moment(currentDate).subtract(1, 'month').format('YYYY年MM月');

    if (type === 'next') {
      return (
        <span>
          {nextMonth} <FiArrowRight />
        </span>
      );
    }

    return (
      <span>
        <FiArrowLeft /> {prevMonth}
      </span>
    );
  };

  const handleMonthChange = ({ view, start }) => {
    setCurrentDate(view.getCurrentData().currentDate);
    setScheduleQueryParams({
      ...scheduleQueryParams,
      month: moment(start).valueOf()
    });
  };

  return (
    <FullCalendar
      ref={calendarRef}
      headerToolbar={{
        left: 'prev',
        center: 'title',
        right: 'next',
      }}
      titleFormat="YYYY年MM月"
      buttonText={{
        next: <RenderButton type="next" />,
        prev: <RenderButton type="prev" />,
      }}
      height="100%"
      plugins={[dayGridPlugin, momentPlugin]}
      datesSet={handleMonthChange}
      events={events}
      eventClick={eventClick}
      showNonCurrentDates={false}
    />
  );
}

Calendar.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})),
  eventClick: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  scheduleQueryParams: PropTypes.any,
  setScheduleQueryParams: PropTypes.func,
};

Calendar.defaultProps = {
  events: [],
  eventClick: undefined,
  scheduleQueryParams: {},
  setScheduleQueryParams: undefined,
};

export default Calendar;
