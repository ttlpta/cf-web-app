const PATH = {
  DEFAULT: '/',
  SCHEDULE: {
    DETAIL: (id) => `/schedules/detail/${id}`,
    LIST: `/schedules`,
  },
  NEW: {
    LIST: '/news',
    DETAIL: (id) => `/news/detail/${id}`,
  },
};

export default PATH;
