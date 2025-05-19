import * as data from './mockData.json';

// mocks an api call
export const fetch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data.default)
    }, 1500)
  });
};
