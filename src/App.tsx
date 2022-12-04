import React, { useContext } from "react";
import Container from "./components/Container";
import FlexContainer from "./components/FlexContainer";
import Table from "./components/Table";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import { useApp } from "./hooks/useApp.hook";
import { ModalContext } from "./context/ModalContext";
import Modal from "./components/Modal";
import { SPACES } from "./theam";
import { MODAL } from "./const";
import AddContactBtn from "./components/AddContactBtn";

function App() {
  const { contacts, isLoading, isError, fetchNextPage } = useApp();
  const { open, modal, close } = useContext(ModalContext);
  const openAddModal = () => {
    open(MODAL.add);
  };
  return (
    <Container>
      {contacts && (
        <FlexContainer gap={SPACES.m}>
          <Table data={contacts} fetchNextPage={fetchNextPage} />
          <AddContactBtn onClick={openAddModal} />
        </FlexContainer>
      )}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {modal === MODAL.add && (
        <Modal title="Add contact" onClose={close}>
          <ContactsForm />
        </Modal>
      )}
      {modal === MODAL.update && (
        <Modal title="Title" onClose={close}>
          <div>Update</div>
        </Modal>
      )}
    </Container>
  );
}

export default App;
