export function ContactLine(props) {
  return (
    <div className="content " style={{'overflowWrap': 'break-word'}}>
      <blockquote>
            <p>
              <strong>{props.contact.name}</strong>
            </p>
            <p>{props.contact.email}</p>
            <p>{props.contact.tel}</p>
        
      </blockquote>
    </div>
  );
}
