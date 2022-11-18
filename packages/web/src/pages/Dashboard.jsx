import React, { useEffect, useState } from 'react';
import '../style/Login.css'
import DashboardHeader from '../components/DashboardHeader';
import api from '../services/api';
import '../style/Dashboard.css'
import ClientsTable from '../components/ClientsTable';


const Dashboard = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const token = localStorage.getItem('token')
      const response = await api.get('/client', { headers: {"Authorization" : `Bearer ${JSON.parse(token)}`}
    });
      setClients(response.data);
    };

    fetchClients();
  }, []);

  return (
    <>
      <DashboardHeader />
      { <ClientsTable clients={clients} /> }
    </>
  )
};

export default Dashboard;
