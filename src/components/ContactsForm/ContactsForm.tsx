import React from "react";
import { Formik, Form } from "formik";
import FormInput from "../FormInput";
import Button from "../Button";
import * as Yup from "yup";
import { FlexContainer } from "../FlexContainer/FlexContainer.styled";
import { SPACES } from "../../theam";

export default function ContactsForm() {
  const onSubmit = (values: {}) => {
    console.log(values);
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
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(
            /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
            "Name may contain only letters, apostrophe, dash and spaces"
          )
          .required("Required"),
        surename: Yup.string()
          .matches(
            /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
            "Surename may contain only letters, apostrophe, dash and spaces"
          )
          .required("Required"),
        phone: Yup.string()
          .matches(
            /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
            "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          )
          .required("Required"),
        email: Yup.string()
          .email("Please provide valid e-mail")
          .required("Required"),
        status: Yup.string().matches(
          /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
          "Status may contain only letters, apostrophe, dash and spaces"
        ),
      })}
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
