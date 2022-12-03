import React from "react";
import "./App.css";
import Container from "./components/Container";
import Table from "./components/Table";
import { useApp } from "./hooks/useApp.hook";

function App() {
  const { contacts, isLoading, isError, fetchNextPage } = useApp();
  return (
    <Container marginTop="20px">
      {contacts && <Table data={contacts} fetchNextPage={fetchNextPage} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
    </Container>
  );
}

export default App;
