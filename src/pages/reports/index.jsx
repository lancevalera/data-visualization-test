import { TotalMetricsGraph, DayByDayGraph } from './components';

export const Reports = () => (
  <div>
    <DayByDayGraph title="Activity by day" />
    <div className="flex flex-wrap">
      <div className="w-1/2 lg:w-1/2 sm:w-full">
        <TotalMetricsGraph metric="impressions" title="Total Impressions by Campaign" />
      </div>
      <div className="w-1/2 lg:w-1/2 sm:w-full">
        <TotalMetricsGraph metric="clicks" title="Total Clicks by Campaign" />
      </div>
    </div>
  </div>
)
