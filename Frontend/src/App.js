import React, { useState, useEffect } from "react";
import "./App.css";
import CustomerTable from "./CustomerTable";
import SearchPaginationSort from "./SearchPaginationSort";
import Pagination from "./Pagination"; // Import Pagination component

function App() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("select");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/customers");
        if (!response.ok) {
          console.log("Error Fetching data");
          throw new Error("Failed to fetch data");
        }
        console.log("Fetching data");
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter customers based on search term
    const filtered = customers.filter(
      (customer) =>
        customer.customer_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        customer.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let sortedFilteredCustomers = [...filtered];

    // Sort filtered customers based on sort option if it's not empty
    if (sortOption === "date") {
      sortedFilteredCustomers.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    } else if (sortOption === "time") {
      sortedFilteredCustomers.sort((a, b) => {
        return (
          new Date(a.created_at).getTime() -
          new Date(a.created_at).setHours(0, 0, 0, 0) -
          (new Date(b.created_at).getTime() -
            new Date(b.created_at).setHours(0, 0, 0, 0))
        );
      });
    }

    setFilteredCustomers(sortedFilteredCustomers);
  }, [customers, searchTerm, sortOption]);

  // Pagination logic
  const customersPerPage = 20;
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Customer List</h1>
      <SearchPaginationSort
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <CustomerTable customers={currentCustomers} />
      <div className="pagination-container">
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={filteredCustomers.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default App;
