import axios from "axios";
import Button from "./Button";

const SearchContact = ({setContacts, contacts}) => {
    const find_contact = document.getElementById("find-contact");

    function searchContact() {

    axios
      .post("http://localhost:3000/search", {
        fullName: find_contact.value,
      })
      .then((res) => {
        const s = res.data;
        setContacts(s);
    });

}
    return (
        <div className="search-contact">
            <input id="find-contact" placeholder="Search contacts" onChange={() => {searchContact();}}></input>

            <Button text={"Search"} className={"search-contact"} onClick={() => {searchContact();}}/>
        </div>
    )
}

export default SearchContact;