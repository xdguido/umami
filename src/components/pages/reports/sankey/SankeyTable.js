import { useContext } from 'react';
import { GridTable, GridColumn } from 'react-basics';
// import { useMessages } from 'components/hooks';
import { ReportContext } from '../Report';

export function SankeyTable() {
  const { report } = useContext(ReportContext);
  // const { formatMessage, labels } = useMessages();

  return (
    <GridTable data={report?.data || []}>
      <GridColumn name="to" label={'To'} />
      <GridColumn name="from" label={'From'} />
      <GridColumn name="flow" label={'Flow'} />
    </GridTable>
  );
}

export default SankeyTable;
