import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  // Fetch contacts from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-backend-wcaq.onrender.com/api/admin/contacts"
        );

        setContacts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredContacts = contacts
    .filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase()) ||
        c.message.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc")
        return new Date(a[sortField]) - new Date(b[sortField]);
      return new Date(b[sortField]) - new Date(a[sortField]);
    });

  if (loading) return <p className="loading">Loading messages...</p>;

  return (
    <div className="admin-dashboard">
      <h1>Contact Messages</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search messages..."
          value={search}
          onChange={handleSearch}
        />
        <button onClick={() => handleSort("createdAt")}>
          Sort by Date {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      <motion.table
        className="contacts-table"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th>Message</th>
            <th onClick={() => handleSort("createdAt")}>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((c) => (
            <motion.tr
              key={c._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.message}</td>
              <td>{new Date(c.createdAt).toLocaleString()}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default AdminDashboard;
