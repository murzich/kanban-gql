import React from 'react';
import { Config } from 'final-form';
import { Form, Field } from 'react-final-form';
import { FormGroup, InputGroup, TextArea, Button } from '@blueprintjs/core';

type IssueValues = {
  summary: string;
  description?: string;
};

type Props = {
  onSubmit: (values?: IssueValues) => void;
};

const NewIssueForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormGroup label="Summary" labelFor="summary" labelInfo="(required)">
            <Field name="summary">
              {({ input = {} }) => (
                <InputGroup
                  id="summary"
                  placeholder="Type summary for the issue"
                  required
                  {...input}
                />
              )}
            </Field>
          </FormGroup>

          <FormGroup label="Description" labelFor="description">
            <Field name="description">
              {({ input = {} }) => (
                <TextArea
                  id="description"
                  placeholder="Type description for the issue"
                  fill
                  growVertically
                  {...input}
                />
              )}
            </Field>
          </FormGroup>

          <Button type="submit" icon="saved">
            Create
          </Button>
        </form>
      )}
    </Form>
  );
};

export default NewIssueForm;
