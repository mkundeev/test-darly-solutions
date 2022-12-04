import axios from "axios";
import { IContact } from "../types/data.types";
const URL = " http://localhost:3004/contacts";

class ContactsSevice {
  async getContacts(page = 1) {
    const results = await axios.get(`${URL}?_page=${page}`);
    return results;
  }
  async getContactsLength() {
    const results = await axios.get(URL);
    return Math.ceil(results.data.length / 10);
  }

  async addContact(body: Omit<IContact, "id">) {
    const results = await axios.post(URL, body);
    return results;
  }
}
const contactsSevice = new ContactsSevice();

export default contactsSevice;
