

export function AppointmentItem(props)
{
    return (
        <div className="content ">
          <blockquote>
                <p>
                  <strong>{props.appointments.contact}</strong>
                </p>
                <p>{props.appointments.date}</p>
                <p>Time goes here</p>
                <p>{props.appointments.title}</p>
                <p>Options go here</p>
            
          </blockquote>
        </div>
      );
}