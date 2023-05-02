import React, { useState } from 'react';
import Pagination from './components/pagination';
import SearchBar from './components/SearchBar';
import data from './components/data';

function App() {
  const [items, setItems] = useState(data);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Function to update search value
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    setCurrentPage(1);
  };

  // Logic for displaying items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let displayedItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Filter items based on search value
  displayedItems = displayedItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to change page
  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <div className="App">
      <h1>Pokemon Search</h1>
      <SearchBar value={searchValue} onChange={handleSearch} />
      

    </div>
  );
}

export default App;
