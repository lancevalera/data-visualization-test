import { useQuery } from '../../hooks';

export const Reports = () => {
	const [data, _setQuery] = useQuery();
	const { loading, result } = data;

	if (loading) {
		return 'Loading'
	}
	return (
		<div>
			{JSON.stringify(result)}
		</div>
	)
}
