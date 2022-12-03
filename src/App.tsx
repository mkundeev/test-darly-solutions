import React, { useState } from "react";
import data from "./utils/data";
import "./App.css";
import Container from "./components/Container";
import Table from "./components/Table";
import contactsSevice from "./apiService/contactsService";
import { useInfiniteQuery } from "react-query";
import { constants } from "buffer";

function App() {
  const [page, setPage] = useState(1);
  const {
    data: result,
    fetchNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: "contacts",
    queryFn: async ({ pageParam = page }) =>
      contactsSevice.getContacts(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const hasNext =
        lastPage.data.pages === pages.length ? undefined : pages.length + 1;
      return hasNext;
    },
  });
  console.log(
    result?.pages.reduce((acc, contact) => acc.concat(contact?.data), [])
  );
  const contacts = result?.pages.reduce(
    (acc, contact) => acc.concat(contact?.data),
    []
  );
  return (
    <Container marginTop="20px">
      {contacts && <Table data={contacts} fetchNextPage={fetchNextPage} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
    </Container>
  );
}

export default App;
