import { TotalMetricsGraph, DayByDayGraph } from './components';

export const Reports = () => (
	<div>
		<h1 class="text-3xl font-bold underline">
			Hello world!
		</h1>
		<TotalMetricsGraph metric="impressions" />
		<TotalMetricsGraph metric="clicks" />
		<DayByDayGraph />
	</div>
)
