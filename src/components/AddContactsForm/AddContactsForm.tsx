import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { Formik, Form } from "formik";
import FormInput from "../FormInput";
import Button from "../Button";
import { FlexContainer } from "../FlexContainer/FlexContainer.styled";
import { SPACES } from "../../theam";
import { IContact } from "../../types/data.types";
import contactsSevice from "../../apiService/contactsService";
import { addContactValidation } from "../../validation/addContactValidation";

export default function AddContactsForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (contact: Omit<IContact, "id">) =>
      contactsSevice.addContact(contact),
    onSuccess: () => queryClient.invalidateQueries("infinityContacts"),
  });

  const onSubmit = (value: Omit<IContact, "id">) => {
    mutation.mutate(value);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        surename: "",
        phone: "",
        email: "",
        status: "",
      }}
      validationSchema={addContactValidation}
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
          >
            <FormInput name="name" title="Name" type="text" />
            <FormInput name="surename" title="Surename" type="text" />
            <FormInput name="phone" title="Phone number" type="tel" />
            <FormInput name="email" title="Email" type="email" />
            <FormInput name="status" title="Status" type="text" />
            <div>
              <Button
                type="submit"
                title="Submit"
                disabled={!(props.isValid && props.dirty)}
              />
            </div>
          </FlexContainer>
        </Form>
      )}
    </Formik>
  );
}
