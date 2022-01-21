import  React, {useState} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Contactpage } from "./presentational/contacts";
import {ContactLine} from "./presentational/contactline"
import {AppointmentsPage} from "./presentational/appointmentspage"
import { AppointmentItem } from "./presentational/appointmentitem";



const testDataContacts=[
  {name:'Joe Blogs 1',
  email:"Joe@Blogs.com",
  tel:12312341231
},
{name:'Sam Blegs 2',
  email:"Joe@Blogs.com",
  tel:12312341231
},
{name:'Jim Bligs 3',
  email:"Joe@Blogs.com",
  tel:12312341231
},
{name:'Aida Add 3',
  email:"aida@Blogs.com",
  tel:12312341231
},
{name:'xxxxx xxxxxxxxxxxxxxxxxxxxxxxx',
  email:"xx@Blogs.com",
  tel:12312341231
},


]

const testDataAppoints=[
  {contact:'Joe Blogs 1',
  title:"Meeting",
  date:'13/12/2021',
  time:"20:25"
  
},
{contact:'Joe Blogs 2',
title:"Meeting",
date:'13/12/2021',
time:"20:25"
},
{contact:'Joe Blogs 3',
title:"Meeting",
date:'13/12/2021',
time:"20:25"
},
{contact:'Joe Blogs 4',
title:"Meeting",
date:'13/12/2021',
time:"20:25"
},
{contact:'Joe Blogs 5',
title:"Meeting",
date:'13/12/2021',
time:"20:25"
},


]




export default function App() {
  const [newContact,setNewContact]=useState({
    name:"",
    email:"",
    tel:"",
  })
  const [contacts,setContancts]=useState(testDataContacts)
  const [newAppoint,setNewAppoint]=useState({contact:"",title:"",date:"",time:""})
  const [appointments,setAppointments]=useState(testDataAppoints)
  const [contactFilter,setContactFilter]=useState("")
  const [appointFilter,setAppointFilter]=useState("")


  const handleInputChange=(e)=>{

    setNewContact((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleInputChangeAppfilter=(e)=>{

    setContactFilter(e.target.value)
  }
  const handleInputChangeApptsfilter=(e)=>{

    setAppointFilter(e.target.value)
  }

  const handleInputChangeAppoint=(e)=>
  {
    setNewAppoint((prev)=>({...prev,[e.target.name]:e.target.value}))

  }

  const handleCreateSubmit=(e)=>
  {
    e.preventDefault()

    if(newContact.name.trim()!=="" && newContact.tel.length!==0 &&  contacts.filter((contact)=>contact.name.toUpperCase()===newContact.name.toUpperCase()).length===0)
    {
      setContancts((prev)=>[...prev,{name:newContact.name,email:newContact.email,tel:newContact.tel.trim()}])
      setNewContact({
        name:"",
        email:"",
        tel:"",
      })
    }
    else
    {
      alert('Contact with this Name already exists or a field is empty')
    }



  }

  const handleCreateSubmitAppoint=(e)=>
  {
    e.preventDefault()

    if(newAppoint.contact!=="" && appointments.filter((contact)=>contact.contact.toUpperCase()===newAppoint.contact.toUpperCase()).length===0)
    {
      setAppointments((prev)=>[...prev,{contact:newAppoint.contact,title:newAppoint.title,date:newAppoint.date,time:newAppoint.time}])
      setNewAppoint({contact:"",title:"",date:"",time:""})
    }
    else
    {
      alert('Appointment with this Name already exists or Contact hasnt been selected')
    }



  }

  const renderContactLines=(contacts)=>
{
  if(contacts.length>0)
  {
    if(contactFilter==="")
    {
      
   return contacts.map((contact)=><ContactLine contact={contact} />)
    }
    else if(contactFilter!=="")
    {
      
      return contacts.map((contact)=>contact.name.toUpperCase().includes(contactFilter.toUpperCase())? <ContactLine contact={contact} />:"")
    }
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
  return <option disabled selected>No contacts found</option>
  }
}

const renderAppointmentLines=(appointments)=>
{

if(appointFilter==="")
{
  return appointments.map((item)=><AppointmentItem appointments={item} />)
}
else if(appointFilter!=="")
{
  return appointments.map((item)=>item.contact.toUpperCase().includes(appointFilter.toUpperCase())?<AppointmentItem appointments={item} />:"")
}
}





  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route  path="/contacts" element={<Contactpage 
          handleInputChange={handleInputChange} 
          currentValues={newContact} 
          onCreate={handleCreateSubmit}
          contacts={contacts}
          renderContactlines={renderContactLines}
          handleInputChangeAppfilter={handleInputChangeAppfilter}
          />} />

          <Route index element={<AppointmentsPage 
          renderContactOptions={renderContactOptions}
          contacts={contacts}
          handleInputChangeAppoint={handleInputChangeAppoint}
          handleCreateSubmitAppoint={handleCreateSubmitAppoint}
          
          currentValues={newAppoint}
          appointments={appointments}
          renderAppointmentLines={renderAppointmentLines}
          handleInputChangeApptsfilter={handleInputChangeApptsfilter}
          
          />} />
          
          <Route path="*" element={<Contactpage 
          handleInputChange={handleInputChange} 
          currentValues={newContact} 
          onCreate={handleCreateSubmit}
          contacts={contacts}
          renderContactlines={renderContactLines}
          handleInputChangeAppfilter={handleInputChangeAppfilter}
          />} />
        </Route>
      </Routes>
    </>
  );
}



function Layout() {
  return (

    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"/>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-item"> Appointment Manager v0.1</span>
          
          </div>
          
    <div class="navbar-start">
      <a class="navbar-item"><Link to="/contacts">Contacts</Link></a>
        
          
          <a className="navbar-item"><Link to="/appointments">Appointments</Link>
            
          </a>
          
            
          </div>
          
          
        
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      
    </>
  );
}