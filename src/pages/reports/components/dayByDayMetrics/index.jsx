import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { Card } from 'src/components';

const dataReducer = (field) => (data) => {
  const totalMetricsByDate = data.reduce((acc, current) => {
    const { date, impressions, clicks } = current
    const combinedActivity = impressions + clicks;
    return {
      ...acc,
      [date]: {
        totalClicks: (acc[date]?.totalClicks || 0) + clicks,
        totalImpressions: (acc[date]?.totalImpressions || 0) + impressions,
        combinedActivity: (acc[date]?.combinedActivity || 0) + combinedActivity
      }
    }
  }, {});
  console.log({ totalMetricsByDate });
  return Object.keys((totalMetricsByDate)).map((date) => ({
    name: date,
    totalCombinedActivity: totalMetricsByDate[date].combinedActivity,
    totalClicks: totalMetricsByDate[date].totalClicks,
    totalImpressions: totalMetricsByDate[date].totalImpressions
  })); 
};

export const DayByDayGraph = ({ metric, title }) => {
  const [data, _setQuery] = useQuery('', dataReducer(metric));
  const { loading, result } = data;
  if (loading) {
    return 'Loading'
  }

  return (
    <Card>
      <p className="text-lg text-left mb-8">{title}</p>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={result}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalCombinedActivity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
