import React from "react";
import { Formik, Form } from "formik";
import FormInput from "../FormInput";
import Button from "../Button";
import { FlexContainer } from "../FlexContainer/FlexContainer.styled";
import { SPACES, FORM } from "../../theam";
import { editeContactValidation } from "../../validation/editeContactValidation";
import { initialValue } from "../../utils/formInitialValue";
import { useEditeContact } from "../../hooks/useEditeContact.hook";

export default function EditeContactsForm() {
  const { onSubmit, contact } = useEditeContact();

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
              name="surname"
              title="Surname"
              type="text"
              info={contact.surname}
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
