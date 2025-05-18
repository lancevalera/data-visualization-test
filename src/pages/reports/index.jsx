import { TotalMetricsGraph } from './components';

export const Reports = () => (
	<div>
		<TotalMetricsGraph metric="impressions" />
		<TotalMetricsGraph metric="clicks" />
	</div>
)
