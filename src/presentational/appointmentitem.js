

export function AppointmentItem(props)
{
    return (
        <div className="content ">
          <blockquote>
                <p>
                  <strong><i class="far fa-user-circle fa-lg"></i> {props.appointments.contact}</strong>
                </p>
                <p><i class="fas fa-tasks fa-lg"></i> {props.appointments.title}</p>
                <p><i class="far fa-calendar-alt fa-lg"></i> {props.appointments.date}</p>
                <p><i class="far fa-hourglass fa-lg"></i> {props.appointments.time}</p>
                
                
            
          </blockquote>
        </div>
      );
}