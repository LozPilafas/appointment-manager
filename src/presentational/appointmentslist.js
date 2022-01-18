import { AppointmentItem } from "./appointmentitem";



export function AppointmentsList (props){
  return (
    <div className="column is-half">
    <div className="box mx-6">
      <div className="subtitle"><strong>Appointments</strong></div>
      

      <AppointmentItem/>
    </div></div>
  );





}