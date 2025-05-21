import { useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';
import { useQuery } from 'src/hooks';
import { Select } from 'src/components/inputs';
import { dataReducer } from './helpers';
import { ChartContainer } from '../common';
import { FILTER_OPTIONS } from './constants';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    return (
      <div className="p-4 shadow-lg rounded bg-white">
        <p className="text-md text-left mb-2">{label}</p>
        <p className="text-md text-left">{`Total clicks and impressions: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}

export const DayByDayGraph = ({ title }) => {
  const [filterValue, setFilterValue] = useState();
  const [data, _setQuery] = useQuery(filterValue, dataReducer);
  const { loading, result } = data;

  return (
    <ChartContainer title={title} loading={loading}>
      <Select
        options={FILTER_OPTIONS}
        label="Select a campaign"
        onChange={(e) => setFilterValue(e.target.value)}
        value={filterValue}
      />
      <ResponsiveContainer height={300} width="100%">
        <LineChart data={result}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} active/>
          <Line type="monotone" dataKey="totalCombinedActivity" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
