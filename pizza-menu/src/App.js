import "./App.css";
import React from "react";
import { pizzaData } from "./data";

const Header = () => {
  return (
    <header className=" header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <main className="menu">
      <h2>This is Our Menu</h2>
     
      {/* map through the data and create a component for each item */}    
        {/* handle by ternary operator */}
        {pizzaData.length > 0 ? (
          <>
            <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzaData.map((item) => <Pizza pizzaObj={item} key={item.name} />)}
            </ul>
          </>
         ) : (
          <p>We are still working on our menu, please come back later</p>
        )}

      {/* {pizzaData.map(item => <Pizza name={item.name} price={item.price}/>)} */}

      {/* <Pizza price={100} photoName='pizzas/spinaci.jpg' name='Pizza Spinaci' ingredients={'Tomato, mozarella, spinach, and ricotta cheese'}/>
      <Pizza photoName='pizzas/salamino.jpg' name="Pizza salamino" ingredients="Tomato, mozarella, and pepperoni" price={12}/> */}
    </main>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {/* short circuting 
      {isOpen && (
        <div className="order">
          <p>
            We are currently open until {closeHour}:00, Come visit us or order
            Online
          </p>
          <button className="btn">Order</button>
        </div>
      )}*/}
      {isOpen ? (
        <Order closeingHour={closeHour} />
      ) : (
        <p>We are happy to welcome you between {openHour}</p>
      )}
    </footer>
  );
};

const Pizza = ({pizzaObj}) => {
  //if (pizzaObj.soldOut) return null; //early return

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
};

const Order = ({closeingHour}) => {
  return (
    <div className="order">
      <p>
        We are currently open until {closeingHour}:00, Come visit us or
        order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

function App() {
  return (
    <div className="App container">
      <Header />
      <Menu></Menu>
      <Footer />
    </div>
  );
}

export default App;
