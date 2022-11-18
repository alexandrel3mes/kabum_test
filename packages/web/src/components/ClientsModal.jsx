import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/User/Context";
import api from "../services/api";

function ClientsModal() {
  const {showModal, setShowModal} = useContext(UserContext);
  const client = JSON.parse(localStorage.getItem('client'))
  const handleClose = () => setShowModal(false);

  const deleteUser = async (id) => {
    const token = localStorage.getItem('token')
    await api.delete(`/client/${id}`, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
      });
    window.location.reload(false);
  }

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{client.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ID: {client.id} <br/>
            Nome: {client.name} <br/>
            CPF: {client.cpf} <br/>
            RG: {client.rg} <br/>
            Telefone: {client.phone} <br/>
            Data de nascimento: {client.birthday} <br/><br/>
          </p>
          <p>
            Endereços:
          </p>
          {
            client.addresses.map((address) => (
              <p key={address.id}>
                ID: {address.id} <br/>
                Endereço: {address.address} <br/>
                Número: {address.number} <br/>
                Bairro: {address.district} <br/>
                Complemento: {address.complement} <br/>
                Referência: {address.reference} <br/>
                Cidade: {address.city} <br/>
                Estado: {address.state} <br/>
              </p>
            ))
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm">
          Editar
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={ () => deleteUser(client.id) }
          >
          Excluir
          </Button>
          <Button variant="primary" size="sm" onClick={handleClose}>
            Adicionar endereço
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ClientsModal
