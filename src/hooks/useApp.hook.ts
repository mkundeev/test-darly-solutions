import contactsSevice from "../apiService/contactsService";
import { useInfiniteQuery, useQuery } from "react-query";
export const useApp = () => {
  const { data: lenght } = useQuery({
    queryKey: "contacts",
    queryFn: contactsSevice.getContactsLength,
  });

  const { data, fetchNextPage, isLoading, isError } = useInfiniteQuery({
    queryKey: "infinityContacts",
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

  return { contacts, isLoading, isError, fetchNextPage };
};
