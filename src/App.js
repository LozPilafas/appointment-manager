import  React, {useState} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Contactpage } from "./presentational/contacts";
import {ContactLine} from "./presentational/contactline"
import {AppointmentsPage} from "./presentational/appointmentspage"







export default function App() {
  const [newContact,setNewContact]=useState({
    name:"",
    email:"",
    tel:"",
  })
  const [contacts,setContancts]=useState([])
  const [newAppoint,setNewAppoint]=useState({contact:"",title:"",date:""})
  const [appointments,setAppointments]=useState([])


  const handleInputChange=(e)=>{

    setNewContact((prev)=>({...prev,[e.target.name]:e.target.value.trim()}))
  }

  const handleInputChangeAppoint=(e)=>
  {
    setNewAppoint((prev)=>({...prev,[e.target.name]:e.target.value.trim()}))

  }

  const handleCreateSubmit=(e)=>
  {
    e.preventDefault()

    if(newContact && contacts.filter((contact)=>contact.name.toUpperCase()===newContact.name.toUpperCase()).length===0)
    {
      setContancts((prev)=>[...prev,{name:newContact.name,email:newContact.email,tel:newContact.tel}])
      setNewContact({
        name:"",
        email:"",
        tel:"",
      })
    }
    else
    {
      alert('Contact with this Name already exists')
    }



  }

  const handleCreateSubmitAppoint=(e)=>
  {
    e.preventDefault()

    if(newAppoint.contact!=="" && appointments.filter((contact)=>contact.contact.toUpperCase()===newAppoint.contact.toUpperCase()).length===0)
    {
      setAppointments((prev)=>[...prev,{contact:newAppoint.contact,title:newAppoint.title,date:newAppoint.date}])
      setNewAppoint({contact:"",title:"",date:""})
    }
    else
    {
      alert('Appointment with this Name already exists')
    }



  }

  const renderContactLines=(contacts)=>
{
  if(contacts.length>0)
  {
   return contacts.map((contact)=><ContactLine contact={contact} />)
  }
  return (<h3>No contacts found - add a new one!</h3>)
}

const renderContactOptions=(contacts)=>
{
  if(contacts.length>0)
  {
    return contacts.map((contactitem)=><option  value={contactitem.name}>{contactitem.name}</option>)
  }
  else{
  return <option>No contacts found</option>
  }
}





  return (
    <>
    <h1>Appointment Manager</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route path="/contacts" element={<Contactpage 
          handleInputChange={handleInputChange} 
          currentValues={newContact} 
          onCreate={handleCreateSubmit}
          contacts={contacts}
          renderContactlines={renderContactLines}
          />} />

          <Route path="/appointments" element={<AppointmentsPage 
          renderContactOptions={renderContactOptions}
          contacts={contacts}
          handleInputChangeAppoint={handleInputChangeAppoint}
          handleCreateSubmitAppoint={handleCreateSubmitAppoint}
          
          />} />
          
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}



function Layout() {
  return (

    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
          
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}