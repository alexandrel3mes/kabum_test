import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/User/Context";
import api from "../services/api";

function ExcludeModal() {
  const {showExcludeModal, setShowExcludeModal} = useContext(UserContext);
  const client = JSON.parse(localStorage.getItem('client'))
  const handleClose = () => setShowExcludeModal(false);

  const deleteUser = async (id) => {
    const token = localStorage.getItem('token')
    await api.delete(`/client/${id}`, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
      });
    window.location.reload(false);
  }

  return (
    <>
      <Modal show={showExcludeModal} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <h3>Excluir cliente?</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            size="lg"
            onClick={ () => deleteUser(client.id) }
          >
          Sim
          </Button>
          <Button variant="primary" size="lg" onClick={handleClose}>
            Não
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExcludeModal
