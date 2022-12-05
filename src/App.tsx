import React, { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { ToastContainer } from "react-toastify";
import Container from "./components/Container";
import FlexContainer from "./components/FlexContainer";
import Table from "./components/Table";
import AddContactsForm from "./components/AddContactsForm";
import EditeContactsForm from "./components/Edite/EditeContactsForm";
import Loader from "./components/Loader";
import ErrorHandler from "./components/ErrorHandler";
import Modal from "./components/Modal";
import AddContactBtn from "./components/AddContactBtn";
import { useApp } from "./hooks/useApp.hook";
import { ModalContext } from "./context/ModalContext";
import { SPACES } from "./theam";
import { MODAL } from "./const";

function App() {
  const {
    contacts,
    isLoading,
    isError,
    fetchNextPage,
    openAddContact,
    error,
    hasNextPage,
  } = useApp();

  const { modal, close } = useContext(ModalContext);
  return (
    <Container>
      {contacts && (
        <FlexContainer gap={SPACES.m}>
          <Table
            data={contacts}
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
          />
          <AddContactBtn onClick={openAddContact} />
        </FlexContainer>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorHandler error={error} />}
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
      <ToastContainer pauseOnHover={false} closeButton={false} />
    </Container>
  );
}

export default App;
