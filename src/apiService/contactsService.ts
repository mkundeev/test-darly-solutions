import axios from "axios";
const URL = " http://localhost:3004/contacts";

class ContactsSevice {
  async getContacts(page = 1) {
    const results = await axios.get(`${URL}?_page=${page}`);
    return results;
  }
}
const contactsSevice = new ContactsSevice();

export default contactsSevice;
