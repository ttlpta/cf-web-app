const { SCHEDULE_TYPE, NEW_CATEGORIES } = require('./config');

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

export const renderNewsIcon = (category) => {
  switch (category) {
    case NEW_CATEGORIES.NOTIFICATION:
      return 'icon-heart';
    case NEW_CATEGORIES.MEDIA:
      return 'icon-camera';
    default:
      return '';
  }
};

