
import { AppointmentsList } from "./appointmentslist";



export function AppointmentsPage (props)
{




return(

    <>
    <h3>Appointments Manager</h3>
    <form onSubmit={props.handleCreateSubmitAppoint}>
    <select name="contact" onChange={props.handleInputChangeAppoint}>
    <option value="" disabled selected>Select Contact</option>
        {props.renderContactOptions(props.contacts)}
    </select>
    <input type="text" placeholder="Input a title" required="true" name="title" onChange={props.handleInputChangeAppoint}/>
    <input type="date" required="yes" name="date" onChange={props.handleInputChangeAppoint} />
    <button type="submit" value="Create Appointment" >Create Appointment</button>
</form>


    </>


)

}