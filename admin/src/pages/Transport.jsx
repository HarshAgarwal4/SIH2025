import React, { useState } from "react";

const TransportPanel = () => {
  const [vehicles, setVehicles] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [requests, setRequests] = useState([
    { id: 1, name: "Harsh Agarwal", route: "Route A", status: "Pending" },
    { id: 2, name: "Ravi Sharma", route: "Route B", status: "Pending" },
  ]);

  const [newVehicle, setNewVehicle] = useState({
    number: "",
    driver: "",
    capacity: "",
  });

  const [newRoute, setNewRoute] = useState({
    name: "",
    start: "",
    end: "",
    fee: "",
  });

  // Add Vehicle
  const handleAddVehicle = () => {
    if (!newVehicle.number || !newVehicle.driver || !newVehicle.capacity) return;
    setVehicles([...vehicles, newVehicle]);
    setNewVehicle({ number: "", driver: "", capacity: "" });
  };

  // Add Route
  const handleAddRoute = () => {
    if (!newRoute.name || !newRoute.start || !newRoute.end || !newRoute.fee) return;
    setRoutes([...routes, newRoute]);
    setNewRoute({ name: "", start: "", end: "", fee: "" });
  };

  // Approve/Reject Request
  const handleRequestAction = (id, action) => {
    setRequests(
      requests.map((r) =>
        r.id === id ? { ...r, status: action } : r
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🚍 Transport Management Panel</h1>
      </header>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicle Management */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="font-semibold mb-3">🚌 Manage Vehicles</h2>
          <input
            type="text"
            value={newVehicle.number}
            onChange={(e) => setNewVehicle({ ...newVehicle, number: e.target.value })}
            placeholder="Vehicle Number"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            value={newVehicle.driver}
            onChange={(e) => setNewVehicle({ ...newVehicle, driver: e.target.value })}
            placeholder="Driver Name"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            value={newVehicle.capacity}
            onChange={(e) => setNewVehicle({ ...newVehicle, capacity: e.target.value })}
            placeholder="Capacity"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddVehicle}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-3"
          >
            Add Vehicle
          </button>

          <h3 className="font-semibold mt-4">All Vehicles</h3>
          <ul className="mt-2">
            {vehicles.length === 0 && <li>No vehicles added</li>}
            {vehicles.map((v, i) => (
              <li key={i} className="border-b py-1">
                {v.number} — Driver: {v.driver} — Capacity: {v.capacity}
              </li>
            ))}
          </ul>
        </div>

        {/* Route Management */}
        <div className="bg-white shadow rounded-lg p-5">
          <h2 className="font-semibold mb-3">🛣 Manage Routes</h2>
          <input
            type="text"
            value={newRoute.name}
            onChange={(e) => setNewRoute({ ...newRoute, name: e.target.value })}
            placeholder="Route Name"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            value={newRoute.start}
            onChange={(e) => setNewRoute({ ...newRoute, start: e.target.value })}
            placeholder="Start Point"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            value={newRoute.end}
            onChange={(e) => setNewRoute({ ...newRoute, end: e.target.value })}
            placeholder="End Point"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            value={newRoute.fee}
            onChange={(e) => setNewRoute({ ...newRoute, fee: e.target.value })}
            placeholder="Fee"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAddRoute}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-3"
          >
            Add Route
          </button>

          <h3 className="font-semibold mt-4">All Routes</h3>
          <ul className="mt-2">
            {routes.length === 0 && <li>No routes added</li>}
            {routes.map((r, i) => (
              <li key={i} className="border-b py-1">
                {r.name}: {r.start} → {r.end} — Fee: ₹{r.fee}
              </li>
            ))}
          </ul>
        </div>

        {/* Requests Management */}
        <div className="bg-white shadow rounded-lg p-5 col-span-2">
          <h2 className="font-semibold mb-3">📋 Transport Requests</h2>
          {requests.length === 0 ? (
            <p>No requests</p>
          ) : (
            <ul>
              {requests.map((req) => (
                <li
                  key={req.id}
                  className="border-b py-2 flex justify-between items-center"
                >
                  <span>
                    <strong>{req.name}</strong> requested <em>{req.route}</em> —{" "}
                    <span
                      className={`${
                        req.status === "Pending"
                          ? "text-yellow-600"
                          : req.status === "Approved"
                          ? "text-green-600"
                          : "text-red-600"
                      } font-semibold`}
                    >
                      {req.status}
                    </span>
                  </span>
                  {req.status === "Pending" && (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleRequestAction(req.id, "Approved")}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRequestAction(req.id, "Rejected")}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportPanel;
