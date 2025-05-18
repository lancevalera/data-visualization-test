import { useState, useEffect } from 'react';
import { fetch } from '../../api';

export const useQuery = (queryString) => {
  const [loading, setLoading] = useState(true);
  const [reportData, setReportData] = useState();
  const [query, setQuery] = useState(queryString);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(query);
        setReportData(response);
        setLoading(false);
    }
    fetchData();
  }, [queryString]);

  return [{ loading, result: reportData }, setQuery];
}