import { Card, Spinner } from 'src/components';

// component to ensure consistent styling of title, card, and loading spinner between charts
export const ChartContainer = ({ title, loading, children }) => (
  <Card>
    <p className="text-lg text-left mb-8">{title}</p>
    {
      loading ? (
        <Spinner />
      ) : (
        children
      )
    }
  </Card>
)
