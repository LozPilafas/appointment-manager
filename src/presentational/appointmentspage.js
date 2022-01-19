
import { AppointmentsList } from "./appointmentslist";



export function AppointmentsPage (props)
{




return(

    <>
    <div className="columns ">
          <div className="column is-half">
        <div className="box mx-6 ">
    <h3 className="subtitle"><strong>Appointments Manager</strong></h3>
    <form onSubmit={props.handleCreateSubmitAppoint}>
    <select className="input mt-4 " name="contact" onChange={props.handleInputChangeAppoint} value={props.currentValues.contact || ""}>
    <option value="" disabled selected>Select Contact</option>
        {props.renderContactOptions(props.contacts)}
    </select>
    <input className="input mt-4 " type="text" placeholder="Input a title" required="true" name="title" onChange={props.handleInputChangeAppoint} value={props.currentValues.title}/>
    <input className="input mt-4 " type="date" required="yes" name="date" onChange={props.handleInputChangeAppoint} value={props.currentValues.date} />
    <button className="button is-primary mt-4" type="submit" value="Create Appointment" >Create Appointment</button>
</form>

</div>
</div>

<AppointmentsList renderAppointmentLines={props.renderAppointmentLines} appointments={props.appointments} /></div>
    </>



)

}