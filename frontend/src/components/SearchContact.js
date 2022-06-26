import axios from "axios";
import Button from "./Button";

const SearchContact = ({setContacts, contacts}) => {
    const find_contact = document.getElementById("find-contact");
    const user_id = localStorage.getItem("user_id")

    function searchContact() {

    axios
      .post("http://localhost:3000/search", {
        fullName: find_contact.value,
        user_id: user_id
      })
      .then((res) => {
        const s = res.data;
        setContacts(s);
    });

}
    return (
        <div className="search-contact">
            <input id="find-contact" placeholder="Search contacts" onChange={() => {searchContact();}}></input>
        </div>
    )
}

export default SearchContact;