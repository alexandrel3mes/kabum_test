import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/User/Context";
import api from "../services/api";
import ClientsModal from "./ClientsModal";

function ClientsTable({clients}) {
  const [client, setClient] = useState()
  const {setShowModal} = useContext(UserContext);

  const findById = async (id) => {
    const token = localStorage.getItem('token')
    const client = await api.get(`/client/${id}`, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
      });
    console.log(client.data)
    setClient(client.data)
    localStorage.setItem('client', JSON.stringify(client.data))
    setShowModal(true)
  }

  return (
    <>
    { client && <ClientsModal/>}
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
            onClick={() => findById(client.id)}
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