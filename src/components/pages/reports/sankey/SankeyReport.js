import SankeyChart from './SankeyChart';
import SankeyTable from './SankeyTable';
import SankeyParameters from './SankeyParameters';
import Report from '../Report';
import ReportHeader from '../ReportHeader';
import ReportMenu from '../ReportMenu';
import ReportBody from '../ReportBody';
import Sankey from 'assets/funnel.svg';
import { REPORT_TYPES } from 'lib/constants';

const defaultParameters = {
  type: REPORT_TYPES.sankey,
};

export default function SankeyReport({ reportId }) {
  return (
    <Report reportId={reportId} defaultParameters={defaultParameters}>
      <ReportHeader icon={<Sankey />} />
      <ReportMenu>
        <SankeyParameters />
      </ReportMenu>
      <ReportBody>
        <SankeyChart />
        <SankeyTable />
      </ReportBody>
    </Report>
  );
}
