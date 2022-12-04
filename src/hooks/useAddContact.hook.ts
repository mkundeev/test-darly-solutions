import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useQueryClient, useMutation } from "react-query";
import contactsSevice from "../apiService/contactsService";
import { IContact } from "../types/data.types";
import { toast } from "react-toastify";
import { QUERY } from "../const";
export const useAddContact = () => {
  const queryClient = useQueryClient();
  const { close } = useContext(ModalContext);

  const mutation = useMutation({
    mutationFn: (contact: Omit<IContact, "id">) =>
      contactsSevice.addContact(contact),
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY.contacts);
      toast.success("Contact added");
    },
    onError: () => {
      toast.error("Error occurred while adding contact");
    },
  });

  const onSubmit = (value: Omit<IContact, "id">) => {
    mutation.mutate(value);
    close();
  };

  return { onSubmit };
};
