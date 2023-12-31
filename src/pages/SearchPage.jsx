import React from 'react';
import SearchBar from '../components/Components2/SearchBar/SearchBar';
import ProductComp from '../components/Components2/ProductComp/ProductComp';
import './SearchPage.css';
import AddressComp from '../components/Components2/AddressComp/AddressComp';
import SideBar from '../components/Components2/SideBar/SideBar';
import Pagination from '../components/Components2/Pagination/Pagination';

const SearchPage = () => {
  return (
    <div>
      <hr className="mt-0"></hr>
      <SearchBar />
      <hr></hr>
      <div className="container mt-5 mb-5 header-content">
        <h3>عقارات سكنية للبيع في مصر</h3>
      </div>
      <AddressComp />
      <div className="container">
        <div className="row">
          <div className="col-8 mt-3">
            <ProductComp />
            <ProductComp />
            <ProductComp />
            <ProductComp />
            <ProductComp />
          </div>
          <div className="col-4 mt-3">
            <SideBar />
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default SearchPage;
