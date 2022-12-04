import React, { useContext } from "react";
import Container from "./components/Container";
import FlexContainer from "./components/FlexContainer";
import Table from "./components/Table";
import AddContactsForm from "./components/AddContactsForm";
import EditeContactsForm from "./components/Edite/EditeContactsForm";
import { useApp } from "./hooks/useApp.hook";
import { ModalContext } from "./context/ModalContext";
import Modal from "./components/Modal";
import { SPACES } from "./theam";
import { MODAL } from "./const";
import AddContactBtn from "./components/AddContactBtn";
import { AnimatePresence } from "framer-motion";
import ReactTooltip from "react-tooltip";

function App() {
  const { contacts, isLoading, isError, fetchNextPage, openAddContact } =
    useApp();
  const { modal, close } = useContext(ModalContext);
  return (
    <Container>
      {contacts && (
        <FlexContainer gap={SPACES.m}>
          <Table data={contacts} fetchNextPage={fetchNextPage} />
          <AddContactBtn onClick={openAddContact} />
        </FlexContainer>
      )}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modal === MODAL.add && (
          <Modal title="Add contact" onClose={close}>
            <AddContactsForm />
          </Modal>
        )}
        {modal === MODAL.update && (
          <Modal title="Update contact" onClose={close}>
            <EditeContactsForm />
          </Modal>
        )}
      </AnimatePresence>
      <ReactTooltip effect="solid" arrowColor="transparent" place="bottom" />
    </Container>
  );
}

export default App;
