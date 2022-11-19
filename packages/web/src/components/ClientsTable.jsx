import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import ExcludeModal from "./ExcludeModal";
import UserContext from "../context/User/Context";

function ClientsTable({clients}) {
  const redirect = useNavigate()
  const {setShowExcludeModal, setClientToExclude} = useContext(UserContext);

  const setExclude = (id) => {
    setShowExcludeModal(true)
    setClientToExclude(id)
  }

  const setDetail = (client) => {
    console.log(client)
    localStorage.removeItem('client')
    localStorage.setItem('client', JSON.stringify(client))
    redirect(`/client/${client.id}`)
  }


  return (
    <>
    <ExcludeModal />
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
            className='t_row'
            key={ client.id }
          >
            <td
            onClick={() => setDetail(client)}
            >
              {client.id}
            </td>
            <td
            onClick={() => setDetail(client)}
            >
              {client.name}
            </td>
            <td
            onClick={() => setDetail(client)}
            >
              {client.cpf}
            </td>
            <td
            onClick={() => setDetail(client)}
            >
              {client.rg}
            </td>
            <td
            onClick={() => setDetail(client)}
            >
              {client.phone}
            </td>
            <td
            onClick={() => setDetail(client)}
            >
              {client.birthday}
            </td>
            <td>
            <NavDropdown
              id="nav-dropdown"
            >
              <NavDropdown.Item
                eventKey="4.1"
                onClick={() => setExclude(client.id)}
              >
                Exlcuir
              </NavDropdown.Item>
            </NavDropdown>

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