import { useContext } from 'react';
import { GridTable, GridColumn } from 'react-basics';
// import { useMessages } from 'components/hooks';
import { ReportContext } from '../Report';

export function SankeyTable() {
  const { report } = useContext(ReportContext);
  // const { formatMessage, labels } = useMessages();

  return (
    <GridTable data={report?.data || []}>
      <GridColumn name="e1" label={'Event 1'} />
      <GridColumn name="e2" label={'Event 2'} />
      <GridColumn name="e3" label={'Event 3'} />
      <GridColumn name="e4" label={'Event 4'} />
      <GridColumn name="e5" label={'Event 5'} />
      <GridColumn name="count" label={'Count'} />
    </GridTable>
  );
}

export default SankeyTable;
