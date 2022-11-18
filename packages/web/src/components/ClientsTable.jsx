import React from "react";
import { useNavigate } from "react-router-dom";

function ClientsTable({clients}) {
  const redirect = useNavigate()



  return (
    <>
    <section className='table_section'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Name
            </th>
            <th>
              CPF
            </th>
            <th>
              RG
            </th>
            <th>
              Phone
            </th>
            <th>
              Birthday
            </th>
          </tr>
        </thead>
        <tbody>
        {clients.map((client) => (
          <tr
            onClick={() => redirect(`/client/${client.id}`)}
            className='t_row'
            key={ client.id }
          >
            <td>
              {client.id}
            </td>
            <td>
              {client.name}
            </td>
            <td>
              {client.cpf}
            </td>
            <td>
              {client.rg}
            </td>
            <td>
              {client.phone}
            </td>
            <td>
              {client.birthday}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
    </>
  )
}

export default ClientsTable