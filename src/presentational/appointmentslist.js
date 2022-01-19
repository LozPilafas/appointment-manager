import { AppointmentItem } from "./appointmentitem";



export function AppointmentsList (props){
  return (
    <div className="column is-half">
    <div className="box mx-6">
    
      <div className="subtitle"><strong>Appointments</strong></div>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Filter  by Name"
            name='AppointFilter'
            onChange={props.handleInputChangeApptsfilter}
          />
        </p>
        <p class="control">
          <a class="button is-primary">Search</a>
        </p>
      </div>

      {props.renderAppointmentLines(props.appointments)}
    </div></div>
  );





}