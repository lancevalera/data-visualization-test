import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useQuery } from 'src/hooks';

const dataReducer = (field) => (data) => {
  const totalMetricsByCampaign = data.reduce((acc, current) => {
    const value = current[field]
    const { campaign } = current
    return { ...acc, [campaign]: (acc[campaign] || 0) + value }
  }, {});
  return Object.keys((totalMetricsByCampaign)).map((name) => ({
    name,
    metric: totalMetricsByCampaign[name]
  })); 
};

export const TotalMetricsGraph = ({ metric }) => {
  const [data, _setQuery] = useQuery('', dataReducer(metric));
  const { loading, result } = data;

  if (loading) {
    return 'Loading'
  }

  return (
    <div>
      <BarChart width={730} height={250} data={result}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="metric" fill="#8884d8" />
      </BarChart>
    </div>
  )
}
