import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { Card } from 'src/components';
import { dataReducer } from './helpers';

export const TotalMetricsGraph = ({ metric, title }) => {
  const [data, _setQuery] = useQuery('', dataReducer(metric));
  const { loading, result } = data;

  if (loading) {
    return 'Loading'
  }

  return (
    <Card>
      <p className="text-lg text-left mb-8">{title}</p>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={result}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="metric" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
