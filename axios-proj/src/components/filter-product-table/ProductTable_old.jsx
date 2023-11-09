import React from 'react'

const ProductTable = ({products}) => {

    /* let unique_category = (products) => {
        let unique_values = [
            ...new Set(products.map((element) => element.category)),
        ];
        return unique_values;
    }; */

    const uniqueCategories = [...new Set(products.map((element) => element.category))];

    
  return (
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {uniqueCategories.map((category) => (
        <React.Fragment key={category}>
          <tr>
            <th colSpan="2">{category}</th>
          </tr>
          {products
            .filter((item) => item.category === category)
            .map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
        </React.Fragment>
      ))}
    </tbody>
  </table>
  )
}

export default ProductTable