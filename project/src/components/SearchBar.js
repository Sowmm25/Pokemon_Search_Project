import React, { useState } from "react";
import data from "./data";
import Pagination from "./pagination";
import "./pagination.css"

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [displayedData, setDisplayedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    if (!value) {
      setDisplayedData(data);
      setCurrentPage(1);
    } else {
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setDisplayedData(filteredData);
      setCurrentPage(1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  
  return (
    <div >
      <input 
        type="text"
        placeholder="Search Pokemon"
        value={searchText}
        onChange={handleInputChange}
        
      />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th></th>
            <th>Name</th>
            <th></th>
            <th>Type</th>
            <th></th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td></td>
              <td>{item.name}</td>
              <td></td>

              <td>{item.type}</td>
              <td></td>
              <td>{item.Abilities}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={displayedData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default SearchBar;
