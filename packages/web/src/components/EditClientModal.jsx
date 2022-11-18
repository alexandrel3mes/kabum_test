import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../context/User/Context';
import api from '../services/api';
import { validateEdit } from '../services/validations'

function EditClientModal({client}) {
  const {showEditModal, setShowEditModal} = useContext(UserContext)
  const [cpf, setCpf] = useState()
  const [rg, setRg] = useState()
  const [phone, setPhone] = useState()

  const dataObj = (cpf, rg, phone) => {
    const obj = {}
    if (cpf) obj.cpf = cpf
    if (rg) obj.rg = rg
    if (phone) obj.phone = phone
    
    return obj
  }

  const dataToFetch = dataObj(cpf, rg, phone)

  const update = async () => {
    const token = localStorage.getItem('token')
    await api.patch(`/client/${client.id}`, dataToFetch, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
      });
    window.location.reload(false);
  }

  const handleClose = () => setShowEditModal(false);

  const handleChange = value => {
    const result = value.replace(/[^0-9]/gi, '');

    return result
  };

  return (
    <>
      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CPF</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o CPF (apenas números)"
                autoFocus
                value={cpf}
                onChange={ ({ target }) => setCpf(handleChange(target.value)) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RG</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o RG (apenas números)"
                autoFocus
                value={rg}
                onChange={ ({ target }) => setRg(handleChange(target.value)) }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o telefone (apenas números)"
                autoFocus
                value={phone}
                onChange={ ({ target }) => setPhone(handleChange(target.value)) }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button disabled={ validateEdit(cpf, rg, phone) } onClick={update}>
            Salvar alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditClientModal