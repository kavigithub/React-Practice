import './App.css';
import User from './components/User';
import FilterableProductTable from './components/filter-product-table/FilterableProductTable';
import Gallery from './components/gallery/Gallery';
import TodoApp from './components/todos-app/TodoApp';
import Tours from './components/tours/Tours';
import PlainCounter from './components/useStateConcpet/PlainCounter';
import UpdateObjectinsideArray from './components/useStateConcpet/UpdateObjectinsideArray';
import CompWithoutHOC from './components/HOC/CompWithoutHOC';
import CompWithHOC from './components/HOC/Item1';
import TodoAppWithDate from './components/to-do-with-dates/TodoAppWithDate';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function App() {
  return (
    <div className="App">
        {/* <User></User> */}
       {/*  <Tours /> */}
       {/* <PlainCounter></PlainCounter> */}
      {/* <FilterableProductTable products={PRODUCTS}/> */}
     {/*  <Gallery />
      <UpdateObjectinsideArray />
      <CompWithoutHOC></CompWithoutHOC>
      <CompWithHOC></CompWithHOC> */}
      {/* <TodoApp />  */} {/* this is the best eg */}
   <TodoAppWithDate></TodoAppWithDate> 
    </div>
  );
}

export default App;
