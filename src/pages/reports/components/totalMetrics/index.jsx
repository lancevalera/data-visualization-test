import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { dataReducer } from './helpers';
import { ChartContainer } from '../common';

export const TotalMetricsGraph = ({ metric, title }) => {
  const [data, _setQuery] = useQuery('', dataReducer(metric));
  const { loading, result } = data;

  return (
    <ChartContainer title={title} loading={loading}>
      <ResponsiveContainer height={300} width="100%">
        <BarChart data={result}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="metric" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
