import { useContext } from 'react';
import ListTable from 'components/metrics/ListTable';
import { useMessages } from 'components/hooks';
import { ReportContext } from '../Report';

export function SankeyTable() {
  const { report } = useContext(ReportContext);
  const { formatMessage, labels } = useMessages();
  return (
    <ListTable
      data={report?.data}
      title={formatMessage(labels.url)}
      metric={formatMessage(labels.visitors)}
      showPercentage={true}
    />
  );
}

export default SankeyTable;
