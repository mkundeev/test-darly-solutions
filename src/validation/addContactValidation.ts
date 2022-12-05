import * as Yup from "yup";
export const addContactValidation = Yup.object({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      "Name may contain only letters, apostrophe, dash and spaces"
    )
    .required("Required"),
  surname: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      "Surname may contain only letters, apostrophe, dash and spaces"
    )
    .required("Required"),
  phone: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required("Required"),
  email: Yup.string().email("Please provide valid e-mail").required("Required"),
  status: Yup.string().matches(
    /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
    "Status may contain only letters, apostrophe, dash and spaces"
  ),
});
