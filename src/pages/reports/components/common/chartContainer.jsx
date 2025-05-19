import { Card } from 'src/components';

export const ChartContainer = ({ title, children }) => (
  <Card>
    <p className="text-lg text-left mb-8">{title}</p>
    {children}
  </Card>
)
