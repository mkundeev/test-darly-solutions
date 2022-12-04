import * as Yup from "yup";
export const editeContactValidation = Yup.object({
  name: Yup.string().matches(
    /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
    "Name may contain only letters, apostrophe, dash and spaces"
  ),
  surename: Yup.string().matches(
    /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
    "Surename may contain only letters, apostrophe, dash and spaces"
  ),
  phone: Yup.string().matches(
    /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
    "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  ),
  email: Yup.string().email("Please provide valid e-mail"),
  status: Yup.string().matches(
    /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
    "Status may contain only letters, apostrophe, dash and spaces"
  ),
});
