import React, { useEffect, useMemo, useState } from "react";

const VmList = () => {
  const [vms, setVms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVMs = async () => {
      try {
        const response = await axios.get("/api/vms/");
        setVms(response.data);
      } catch (err) {
        setError("Failed to fetch VMs");
      } finally {
        setLoading(false);
      }
    };

    fetchVMs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>VM List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>CPUs</th>
            <th>RAM</th>
            <th>Server</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {vms.map((vm) => (
            <tr key={vm.id}>
              <td>{vm.id}</td>
              <td>{vm.name}</td>
              <td>{vm.cpus}</td>
              <td>{vm.ram}</td>
              <td>{vm.server ? vm.server.name : "N/A"}</td>
              <td>{vm.active ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VmList;
