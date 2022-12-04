import React, { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Formik, Form } from "formik";
import FormInput from "../FormInput";
import Button from "../Button";
import { FlexContainer } from "../FlexContainer/FlexContainer.styled";
import { SPACES, FORM } from "../../theam";
import { IContact } from "../../types/data.types";
import contactsSevice from "../../apiService/contactsService";
import { editeContactValidation } from "../../validation/editeContactValidation";
import { ContactContext } from "../../context/ContactContext";
import { initialValue } from "../../utils/formInitialValue";
import { ModalContext } from "../../context/ModalContext";

export default function EditeContactsForm() {
  const queryClient = useQueryClient();
  const { contact } = useContext(ContactContext);
  const { close } = useContext(ModalContext);

  const mutation = useMutation({
    mutationFn: (data: { id: string; contact: Partial<IContact> }) =>
      contactsSevice.updateContact(data.id, data.contact),
    onSuccess: () => queryClient.invalidateQueries("infinityContacts"),
  });

  const onSubmit = (value: Partial<IContact>) => {
    if (contact.id) mutation.mutate({ id: contact.id, contact: value });
    close();
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={editeContactValidation}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values);
        setSubmitting(false);
        resetForm({});
      }}
    >
      {(props) => (
        <Form>
          <FlexContainer
            flexDirection="column"
            gap={SPACES.m}
            alignItems="center"
            width={FORM.formWidth}
          >
            <FormInput
              name="name"
              title="Name"
              type="text"
              info={contact.name}
            />
            <FormInput
              name="surename"
              title="Surename"
              type="text"
              info={contact.surename}
            />
            <FormInput
              name="phone"
              title="Phone number"
              type="tel"
              info={contact.phone}
            />
            <FormInput
              name="email"
              title="Email"
              type="email"
              info={contact.email}
            />
            <FormInput
              name="status"
              title="Status"
              type="text"
              info={contact.status}
            />
            <div>
              <Button type="submit" title="Submit" disabled={!props.dirty} />
            </div>
          </FlexContainer>
        </Form>
      )}
    </Formik>
  );
}
