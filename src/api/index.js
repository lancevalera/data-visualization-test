import * as data from './mockData.json';

// mocks an api call
export const fetch = (campaignNameFilter) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        campaignNameFilter
        ? data.default.filter(({ campaign }) => campaign === campaignNameFilter)
        : data.default
      )
    }, 1500)
  });
};
