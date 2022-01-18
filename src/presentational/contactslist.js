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
            placeholder="Filter Contacts by Name"
          />
        </p>
        <p class="control">
          <a class="button is-info">Search</a>
        </p>
      </div>

      {props.renderContactlines(props.contacts)}
    </div></div>
  );
}
