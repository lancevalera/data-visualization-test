import { useState, useEffect } from 'react';
import { fetch } from '../../api';

export const useQuery = (queryString, reducer) => {
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState();
  const [query, setQuery] = useState(queryString);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(query);
      if (reducer) {
        response = reducer(response)
      }
      setReportData(response);
      setLoading(false);
    }
    fetchData();
  }, [queryString]);

  return [{ loading, result: reportData }, setQuery];
}