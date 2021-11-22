const COMPANY_SERVICE = '/company';

const API = {
  COMPANY: {
    SCHEDULES: `${COMPANY_SERVICE}/schedules`,
    SCHEDULE: (id) => `${COMPANY_SERVICE}/schedule/${id}`,
  },
  TOP_PAGE: {
    CAMPAIGNS: `${COMPANY_SERVICE}/campaigns`,
    CAMPAIGN: (id) => `${COMPANY_SERVICE}/campaign/${id}`,
    BANNERS: `${COMPANY_SERVICE}/banners`,
    PROFILE: `${COMPANY_SERVICE}/artist-info/1`
  },
};

export default API;
