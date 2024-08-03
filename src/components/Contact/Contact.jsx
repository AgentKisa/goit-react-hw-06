import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>
          <RiContactsFill /> {contact.name}
        </p>
      </div>
      <div>
        <p>
          <BsFillTelephoneFill /> {contact.number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
