import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { dataReducer } from './helpers';
import { ChartContainer } from '../common';

export const DayByDayGraph = ({ title }) => {
  const [data, _setQuery] = useQuery('', dataReducer);
  const { loading, result } = data;

  return (
    <ChartContainer title={title} loading={loading}>
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={result}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="totalCombinedActivity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
