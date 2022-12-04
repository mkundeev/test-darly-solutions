import React, { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import contactsSevice from "../../apiService/contactsService";
import { IContact } from "../../types/data.types";
import { ModalContext } from "../../context/ModalContext";
import { MODAL } from "../../const";
import * as Styled from "./TableRow.styled";
import FlexContainer from "../FlexContainer";
import { SPACES } from "../../theam";
import { ContactContext } from "../../context/ContactContext";

interface IProps {
  item: IContact;
}
export default function TableRow({ item }: IProps) {
  const queryClient = useQueryClient();
  const { open } = useContext(ModalContext);
  const { setContact } = useContext(ContactContext);

  const mutation = useMutation({
    mutationFn: (id: string) => contactsSevice.deleteContact(id),
    onSuccess: () => queryClient.invalidateQueries("infinityContacts"),
  });

  const handleDelete = () => {
    mutation.mutate(item.id);
  };

  const openModal = () => {
    open(MODAL.update);
    setContact(item);
  };
  return (
    <>
      <td>{item.name}</td>
      <td>{item.surename}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.status}</td>
      <td>
        <FlexContainer gap={SPACES.s}>
          <Styled.SettingBtn onClick={openModal} data-tip="Edite contact" />
          <Styled.DeleteBtn onClick={handleDelete} data-tip="Delete contact" />
        </FlexContainer>
      </td>
    </>
  );
}
