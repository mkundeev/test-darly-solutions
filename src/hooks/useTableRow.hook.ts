import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ModalContext } from "../context/ModalContext";
import { ContactContext } from "../context/ContactContext";
import contactsSevice from "../apiService/contactsService";
import { IContact } from "../types/data.types";
import { MODAL } from "../const";
export const useTableRow = (item: IContact) => {
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

  return { handleDelete, openModal };
};
