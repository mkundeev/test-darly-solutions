import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { ContactContext } from "../context/ContactContext";
import { useQueryClient, useMutation } from "react-query";
import contactsSevice from "../apiService/contactsService";
import { IContact } from "../types/data.types";
import deleteProperty from "../utils/deleteProperty";
import { toast } from "react-toastify";
import { QUERY } from "../const";

export const useEditeContact = () => {
  const queryClient = useQueryClient();
  const { contact } = useContext(ContactContext);
  const { close } = useContext(ModalContext);

  const mutation = useMutation({
    mutationFn: (data: { id: string; contact: Partial<IContact> }) =>
      contactsSevice.updateContact(data.id, data.contact),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.contacts);
      toast.success("Contact updated");
    },
    onError: () => {
      toast.error("Error occurred while updating contact");
    },
  });

  const onSubmit = (value: Partial<IContact>) => {
    const updateContact = deleteProperty(value);
    if (contact.id) mutation.mutate({ id: contact.id, contact: updateContact });
    close();
  };

  return { onSubmit, contact };
};
