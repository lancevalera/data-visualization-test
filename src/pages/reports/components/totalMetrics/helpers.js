export const dataReducer = (field) => (data) => {
  const totalMetricsByCampaign = data.reduce((acc, current) => {
    const value = current[field]
    const { campaign } = current
    return { ...acc, [campaign]: (acc[campaign] || 0) + value }
  }, {});
  return Object.keys((totalMetricsByCampaign)).map((campaignName) => ({
    name: campaignName,
    metric: totalMetricsByCampaign[campaignName]
  }));
};
