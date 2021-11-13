const { SCHEDULE_TYPE } = require('./config');

export const renderScheduleTypeLabel = (scheduleType) => {
  switch (scheduleType) {
    case SCHEDULE_TYPE.ALL:
      return 'ALL';
    case SCHEDULE_TYPE.LIVE:
      return 'LIVE';
    case SCHEDULE_TYPE.EVENT:
      return 'EVENT';
    case SCHEDULE_TYPE.MEDIA:
      return 'MEDIA';
    case SCHEDULE_TYPE.OTHERS:
      return 'OTHERS';
    default:
      return '';
  }
};

export const a = 1;
