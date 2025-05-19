import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { Card } from 'src/components';
import { dataReducer } from './helpers';
import { ChartContainer } from '../common';

export const DayByDayGraph = ({ title }) => {
  const [data, _setQuery] = useQuery('', dataReducer);
  const { loading, result } = data;
  if (loading) {
    return 'Loading'
  }

  return (
    <ChartContainer title={title}>
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
    </ChartContainer>
  )
}
