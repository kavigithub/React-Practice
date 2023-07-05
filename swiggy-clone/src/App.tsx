
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { JSX } from 'react/jsx-runtime';
import Header from "./pages/Header";
import Body from './pages/Body';
import { Outlet } from 'react-router-dom';




// interface abc :   const rows: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | JSX.Element[] | null | undefined = [];
/* 
function ProductCategoryRow({}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}

function ProductRow({ product }){
  const name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>;
  return(
    <tr>
      <td>{name}</td>
      <td><{product.price}/td>
    </tr>
  )
} */

{/* function ProductTable({ products }) {
  const rows: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | JSX.Element[] | null | undefined = [];
  let lastCategory : null | string = null

  products.forEach((element: { category: React.Key | null | undefined; }) => {
    if(element.category !== lastCategory){
      rows.push(<ProductCategoryRow category={element.category}  key={element.category}/>)
      lastCategory = element.category
    }
  });

  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
} */}

/* 
const getCardList = async () => {
  const getCards =  await callApi();
  console.log(getCards);

  const getCardItem =  getCards.map((item: any) => {console.log(item)})

  console.log(getCardItem, 'getCardItem');

  return getCardItem;
} 

getCardList(); 
  add in html  <RestaruentCard key={item.data.id} id={item.data.id} title={item.data.name} cardText={item.data.address} />
*/

function App() {
  return (
    <div className="App">
        <Header />
        <Outlet />
      </div>
  );
}


export default App;
