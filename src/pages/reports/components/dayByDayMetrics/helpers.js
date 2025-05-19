export const dataReducer = (data) => {
  const totalMetricsByDate = data.reduce((acc, current) => {
    const { date, impressions, clicks } = current
    const combinedActivity = impressions + clicks;
    return {
      ...acc,
      [date]: {
        totalClicks: (acc[date]?.totalClicks || 0) + clicks,
        totalImpressions: (acc[date]?.totalImpressions || 0) + impressions,
        combinedActivity: (acc[date]?.combinedActivity || 0) + combinedActivity
      }
    }
  }, {});
  return Object.keys((totalMetricsByDate)).map((date) => ({
    name: date,
    totalCombinedActivity: totalMetricsByDate[date].combinedActivity,
    totalClicks: totalMetricsByDate[date].totalClicks,
    totalImpressions: totalMetricsByDate[date].totalImpressions
  }));
};
