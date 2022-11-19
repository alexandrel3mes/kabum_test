import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import api from "../services/api";
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../style/ClientDetails.css'
import EditClientModal from "../components/EditClientModal";
import UserContext from "../context/User/Context";

function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState()
  const {setShowEditModal} = useContext(UserContext)


  useEffect(() => {
    const findById = async (id) => {
      const token = localStorage.getItem('token')
      const returnedClient = await api.get(`/client/${id}`, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
        });
      console.log(client)
      setClient(returnedClient.data)
      localStorage.setItem('client', JSON.stringify(returnedClient.data))
    }

    findById(id)
  }, [])

  const localClient = JSON.parse(localStorage.getItem('client'));

  return (
    <>
      <DashboardHeader />
      <EditClientModal client={localClient} />
      <section className="user_section">
        <div className="user_details">
          <NavDropdown
            className="title_drop"
            title={localClient.name}
            id="nav-dropdown"
          >
            <NavDropdown.Item
              eventKey="4.1"
              onClick={() => setShowEditModal(true)}
            >
              Editar
            </NavDropdown.Item>
          </NavDropdown>
          <p>ID: {localClient.id}</p>
          <p>CPF: {localClient.cpf}</p>
          <p>RG: {localClient.rg}</p>
          <p>Telefone: {localClient.phone}</p>
          <p>Data de nascimento: {localClient.birthday}</p>
        </div>
        <div className="addresses_details user_details">
          <p>Endereços</p>
          {
            localClient.addresses.map((address, index) => (
              <div className="address_details" key={address.id}>
                <p>
                  {`Endereço ${index + 1}`}
                </p>
                <p>ID: {address.id}</p>
                <p>Endereço: {address.address}</p>
                <p>Número: {address.number}</p>
                <p>Bairro: {address.district}</p>
                <p>Complemento: {address.complement ? address.complement : '----'}</p>
                <p>Ponto de referencia: {address.reference ? address.reference : '----'}</p>
                <p>Cidade: {address.city}</p>
                <p>Estado: {address.state}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default ClientDetails
