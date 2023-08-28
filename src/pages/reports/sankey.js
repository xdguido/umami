import AppLayout from 'components/layout/AppLayout';
import SankeyReport from 'components/pages/reports/sankey/SankeyReport';
import useMessages from 'components/hooks/useMessages';

export default function () {
  const { formatMessage, labels } = useMessages();

  return (
    <AppLayout title={`${formatMessage(labels.sankey)} - ${formatMessage(labels.reports)}`}>
      <SankeyReport />
    </AppLayout>
  );
}
