import * as data from './mockData.json';

export const fetch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data.default)
    }, 1000)
  });
};
