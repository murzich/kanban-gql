import React from 'react';
import { Form } from 'react-final-form';
import { FormGroup, InputGroup, TextArea, Button } from '@blueprintjs/core';

const NewIssueForm = () => {
  return (
    <Form onSubmit={() => {}}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormGroup label="Summary" labelFor="summary" labelInfo="(required)">
            <InputGroup
              id="summary"
              placeholder="Type summary for the issue"
              required
            />
          </FormGroup>

          <FormGroup label="Description" labelFor="description">
            <TextArea
              id="description"
              placeholder="Type description for the issue"
              fill
              growVertically
            />
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
