import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({products}) => {
  return (
    <>
        <SearchBar></SearchBar>
        <ProductTable products={products}></ProductTable>
    </>
  )
}

export default FilterableProductTable