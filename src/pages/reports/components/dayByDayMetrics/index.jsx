import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from 'recharts';
import { useQuery } from 'src/hooks';

const dataReducer = (field) => (data) => {
  const totalMetricsByDate = data.reduce((acc, current) => {
    const { date, impressions, clicks } = current
    const metricValue = impressions + clicks;
    return { ...acc, [date]: (acc[date] || 0) + metricValue }
  }, {});
  console.log({ totalMetricsByDate });
  return Object.keys((totalMetricsByDate)).map((name) => ({
    name,
    metric: totalMetricsByDate[name]
  })); 
};

export const DayByDayGraph = ({ metric }) => {
  const [data, _setQuery] = useQuery('', dataReducer(metric));
  const { loading, result } = data;
  console.log({ result });
  if (loading) {
    return 'Loading'
  }

  return (
    <div>
      <LineChart width={730} height={250} data={result}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="metric" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
