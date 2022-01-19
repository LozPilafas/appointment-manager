export function ContactsList(props) {
  return (
    <div className="column is-half">
    <div className="box mx-6">
      <div className="subtitle"><strong>Contacts</strong></div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            name="contactFilter"
            onChange={props.onChange}
            placeholder="Filter Contacts by Name"
          />
        </p>
        <p class="control">
          <a class="button is-primary">Search</a>
        </p>
      </div>

      {props.renderContactlines(props.contacts)}
    </div></div>
  );
}
