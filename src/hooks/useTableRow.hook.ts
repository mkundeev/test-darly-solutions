import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { ModalContext } from "../context/ModalContext";
import { ContactContext } from "../context/ContactContext";
import contactsSevice from "../apiService/contactsService";
import { IContact } from "../types/data.types";
import { MODAL, QUERY } from "../const";
import { toast } from "react-toastify";

export const useTableRow = (item: IContact) => {
  const queryClient = useQueryClient();
  const { open } = useContext(ModalContext);
  const { setContact } = useContext(ContactContext);

  const mutation = useMutation({
    mutationFn: (id: string) => contactsSevice.deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.contacts);
      toast.success("Contact deleted");
    },
    onError: () => {
      toast.error("Error occurred while deleting contact");
    },
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
