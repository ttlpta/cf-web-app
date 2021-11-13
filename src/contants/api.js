const COMPANY_SERVICE = '/company';

const API = {
  COMPANY: {
    SCHEDULES: `${COMPANY_SERVICE}/schedules`,
    SCHEDULE: (id) => `${COMPANY_SERVICE}/schedule/${id}`,
  },
  TOP_PAGE: {
    TOP_NEWS: `${COMPANY_SERVICE}/campaigns`,
    BANNERS: `${COMPANY_SERVICE}/banners`,
    PROFILE: `${COMPANY_SERVICE}/artist/login-id`
  },
};

export default API;
