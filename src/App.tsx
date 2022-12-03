import React, { useContext } from "react";
import Container from "./components/Container";
import FlexContainer from "./components/FlexContainer";
import Table from "./components/Table";
import { useApp } from "./hooks/useApp.hook";
import { ModalContext } from "./context/ModalContext";
import Modal from "./components/Modal";
import { SPACES } from "./theam";
import { GrAddCircle } from "react-icons/gr";

function App() {
  const { contacts, isLoading, isError, fetchNextPage } = useApp();
  const { open, modal, close } = useContext(ModalContext);
  return (
    <Container>
      {contacts && (
        <FlexContainer gap={SPACES.m}>
          <Table data={contacts} fetchNextPage={fetchNextPage} />
          <GrAddCircle onClick={open} />
        </FlexContainer>
      )}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {modal && (
        <Modal title="Title" onClose={close}>
          <div>Test</div>
        </Modal>
      )}
    </Container>
  );
}

export default App;
