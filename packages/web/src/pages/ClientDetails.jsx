import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import api from "../services/api";

function ClientDetails() {
  const { id } = useParams();
  const [client, setClient] = useState()


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

  return (
    <>
      <DashboardHeader />
    </>
  )
}

export default ClientDetails