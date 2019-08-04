import { Navbar } from '@blueprintjs/core';
import React from 'react';
import styles from './App.module.scss';
import IssueCard from './Issue/IssueCard';

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <Navbar>
        <Navbar.Group>Kanban GraphQL TDD</Navbar.Group>
      </Navbar>
      <main className={styles.content}>
        <IssueCard
          id="TEMP-123"
          summary="Temp summary"
          description="Temporary description text"
        />
      </main>
    </div>
  );
};

export default App;
