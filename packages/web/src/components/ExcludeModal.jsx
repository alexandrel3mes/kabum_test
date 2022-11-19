import React from "react";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/User/Context";
import api from "../services/api";

function ExcludeModal() {
  const {clientToExclude, showExcludeModal, setShowExcludeModal} = useContext(UserContext);
  const handleClose = () => setShowExcludeModal(false);

  const deleteUser = async (id) => {
    const token = localStorage.getItem('token')
    await api.delete(`/client/${id}`, { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
      });
    localStorage.removeItem('client')
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
            onClick={ () => deleteUser(clientToExclude) }
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
