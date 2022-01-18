import { ContactLine } from "./contactline"


export function ContactsList(){


    return(
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th> 
    <th>Tel</th>
  </tr>
 <ContactLine />
</table>
    )
}