import React from "react";
import { Formik, Form } from "formik";
import FormInput from "../FormInput";
import Button from "../Button";
import FlexContainer from "../FlexContainer";
import { addContactValidation } from "../../validation/addContactValidation";
import { initialValue } from "../../utils/formInitialValue";
import { useAddContact } from "../../hooks/useAddContact.hook";
import { SPACES, FORM } from "../../theam";

export default function AddContactsForm() {
  const { onSubmit } = useAddContact();

  return (
    <Formik
      initialValues={initialValue}
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
            width={FORM.formWidth}
          >
            <FormInput name="name" title="Name" type="text" required />
            <FormInput name="surname" title="Surname" type="text" required />
            <FormInput name="phone" title="Phone number" type="tel" required />
            <FormInput name="email" title="Email" type="email" required />
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
