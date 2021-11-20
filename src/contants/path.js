const PATH = {
  DEFAULT: '/',
  LOGIN: '/login',
  PROFILE: '/artist-profile',
  SCHEDULE: {
    DETAIL: (id) => `/schedules/detail/${id || ':id'}`,
    LIST: `/schedules`,
  },
  NEW: {
    LIST: '/news',
    DETAIL: (id) => `/news/detail/${id || ':id'}`,
  },
};

export default PATH;
