import FunnelReport from './funnel/FunnelReport';
import EventDataReport from './event-data/EventDataReport';
import InsightsReport from './insights/InsightsReport';
import RetentionReport from './retention/RetentionReport';
import SankeyReport from './sankey/SankeyReport';

const reports = {
  funnel: FunnelReport,
  'event-data': EventDataReport,
  insights: InsightsReport,
  retention: RetentionReport,
  sankey: SankeyReport,
};

export default function ReportDetails({ reportId, reportType }) {
  const Report = reports[reportType];

  return <Report reportId={reportId} />;
}
