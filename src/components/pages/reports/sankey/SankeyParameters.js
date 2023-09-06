import { useContext, useRef } from 'react';
import { useMessages } from 'components/hooks';
import { Form, FormButtons, SubmitButton } from 'react-basics';
import { ReportContext } from 'components/pages/reports/Report';
import BaseParameters from '../BaseParameters';

export function SankeyParameters() {
  const { report, runReport, isRunning } = useContext(ReportContext);
  const { formatMessage, labels } = useMessages();
  const ref = useRef(null);

  const { parameters } = report || {};
  const { websiteId, dateRange } = parameters || {};
  const queryDisabled = !websiteId || !dateRange;

  const handleSubmit = (data, e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!queryDisabled) {
      runReport(data);
    }
  };

  return (
    <Form ref={ref} values={parameters} onSubmit={handleSubmit} preventSubmit={true}>
      <BaseParameters />
      <FormButtons>
        <SubmitButton variant="primary" disabled={queryDisabled} isLoading={isRunning}>
          {formatMessage(labels.runQuery)}
        </SubmitButton>
      </FormButtons>
    </Form>
  );
}

export default SankeyParameters;
