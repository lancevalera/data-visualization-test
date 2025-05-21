import { useState, useEffect } from 'react';
import { fetch } from '../../api';

// mock client for api calls
export const useQuery = (queryString, reducer) => {
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await fetch(queryString);
      if (reducer) {
        response = reducer(response)
      }
      setReportData(response);
      setLoading(false);
    }
    fetchData();
  }, [queryString]);

  return [{ loading, result: reportData }];
}