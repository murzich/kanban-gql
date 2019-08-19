import { ApolloProvider } from '@apollo/react-hooks';
import { Navbar } from '@blueprintjs/core';
import ApolloClient from 'apollo-boost';
import React from 'react';
import styles from './App.module.scss';
import IssueCard from './Issue/IssueCard';
import IssueList from './Issue/IssueList';
import IssueListContainer from './Issue/IssueListContainer';
import ColumnItem from './Columns/ColumnItem';

const client = new ApolloClient({
  uri: 'https://faker.graphqleditor.com/kanban/kanban/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
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
          <IssueList />
          <IssueListContainer />
          <ColumnItem title="test" />
        </main>
      </div>
    </ApolloProvider>
  );
};

export default App;
