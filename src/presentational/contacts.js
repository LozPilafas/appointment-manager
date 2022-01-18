
import { ContactsList } from "./contactslist"


export function Contactpage (props)
{




    return(
        <>
        <h1>Contacts management</h1>

        <p></p>
        <h2>Add new Contact</h2>
        <form onSubmit={props.onCreate}>
            <input type='text' required="true" placeholder="Name" name='name' onChange={props.handleInputChange} value={props.currentValues.name}/>
            <input type="email" required="true" name="email" onChange={props.handleInputChange} value={props.currentValues.email} placeholder="E-mail address" />
            <input type='text' required="true" name='tel' onChange={props.handleInputChange} value={props.currentValues.tel} placeholder="Telephone Number" />
            <button type="submit" >Create Contact</button>
        </form>
        <ContactsList />
        </>
    )

}