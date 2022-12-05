import { useContext } from "react";
import contactsSevice from "../apiService/contactsService";
import { useInfiniteQuery, useQuery } from "react-query";
import { ModalContext } from "../context/ModalContext";
import { MODAL, QUERY } from "../const";
export const useApp = () => {
  const { open } = useContext(ModalContext);
  const { data: lenght } = useQuery({
    queryKey: QUERY.pages,
    queryFn: contactsSevice.getContactsLength,
  });

  const { data, fetchNextPage, isLoading, isError, error, hasNextPage } =
    useInfiniteQuery({
      queryKey: QUERY.contacts,
      queryFn: async ({ pageParam }) => contactsSevice.getContacts(pageParam),
      getNextPageParam: (_, pages) => {
        const hasNext = pages.length === lenght ? undefined : pages.length + 1;
        return hasNext;
      },
    });

  const contacts = data?.pages.reduce(
    (acc, contact) => acc.concat(contact?.data),
    []
  );

  const openAddContact = () => {
    open(MODAL.add);
  };

  return {
    contacts,
    isLoading,
    isError,
    fetchNextPage,
    openAddContact,
    error,
    hasNextPage,
  };
};
