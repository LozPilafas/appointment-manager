import  React, {useState} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Contactpage } from "./presentational/contacts";


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/appointments">appointments</Link>
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




export default function App() {
  const [newContact,setNewContact]=useState({
    name:"",
    email:"",
    tel:"",
  })

  const [contacts,setContancts]=useState([])


  const handleInputChange=(e)=>{

    setNewContact((prev)=>({...prev,[e.target.name]:e.target.value.trim()}))
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





  return (
    <>
    <h1>Appointment Manager</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
         
          <Route path="contacts" element={<Contactpage 
          handleInputChange={handleInputChange} 
          currentValues={newContact} 
          onCreate={handleCreateSubmit}
          />} />
          
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </>
  );
}



