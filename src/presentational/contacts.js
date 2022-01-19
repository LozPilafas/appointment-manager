import { ContactsList } from "./contactslist";

export function Contactpage(props) {
  return (
    <>
      <div className="columns ">
          <div className="column is-half">
        <div className="box mx-6 ">
          <h2 className="subtitle"><strong>Add New Contact</strong></h2>

          <div className="  ">
            <form onSubmit={props.onCreate}>
              <input
                className="input mt-4 "
                type="text"
                required="true"
                maxLength="40"
                placeholder="Name"
                name="name"
                onChange={props.handleInputChange}
                value={props.currentValues.name}
              />
              <input
                className="input mt-4"
                type="email"
                required="true"
                maxLength="40"
                name="email"
                onChange={props.handleInputChange}
                value={props.currentValues.email}
                placeholder="E-mail address"
              />
              <input
                className="input mt-4"
                type="text"
                required="true"
                maxLength="40"
                name="tel"
                onChange={props.handleInputChange}
                value={props.currentValues.tel}
                placeholder="Telephone Number"
              />
              <button className="button is-primary mt-4" type="submit">
                Create Contact
              </button>
            </form>
          </div>
        </div>
         </div>
         
        <ContactsList
          contacts={props.contacts}
          renderContactlines={props.renderContactlines}
          onChange={props.handleInputChangeAppfilter}
        />
     </div>
    </>
  );
}
