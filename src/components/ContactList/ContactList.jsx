import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilter, selectContacts } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectFilter);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredData.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          {/* <Contact pull={contact} /> */}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
