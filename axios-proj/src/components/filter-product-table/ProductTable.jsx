import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({products}) => {
    const row = [];
    let lastCategory = null;

    products.forEach(element => {
        if(element.category !== lastCategory){
            row.push(<ProductCategoryRow key={element.category} category={element.category}/>)
        }
        row.push(<ProductRow key={element.name} product={element}/>)
        lastCategory = element.category;
    });

    console.log(row);

    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{row}</tbody>
        </table>
      );
}

export default ProductTable